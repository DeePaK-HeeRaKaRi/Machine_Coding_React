import React from "react";
import Searchbox from "./SearchBox/Searchbox";
import ListBox from "./RenderItems/ListBox";
import "./Autocomplete.css";

const AutoComplete = () => {
  const transformData = (data) => data.results;
  const dataPromise = async (query, signal) =>
    await fetch(`https://swapi.dev/api/people/?search=${query}`, { signal });

  return (
    <div className="wrapper">
      <Searchbox
        id="personName"
        name="PersonName"
        label="Enter Person Name"
        Placeholder="Enter Your favourite star person"
        autoComplete={true}
        // if i get 100 items in a list i should be limit
        maxItems={5}
        styles={{ label: "label", input: "input" }}
        debounceWait={400}
        listBox={(items, presentIndex) => (
          <ListBox items={items} activeIndex={presentIndex} />
        )}
        noItemMessage={() => <div>Sorry No person found</div>}
        errorMessage={() => <div>Something Went wrong</div>}
        transformData={transformData}
        promise={dataPromise}
      />
    </div>
  );
};

export default AutoComplete;
