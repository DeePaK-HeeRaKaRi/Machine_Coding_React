import React, { useState } from "react";
import useFetchPromise from "./useFetchPromise";
import ListBox from "../RenderItems/ListBox";

const Searchbox = (props) => {
  const {
    id,
    name,
    label,
    Placeholder,
    autoComplete,
    maxItems,
    styles,
    debounceWait,
    listBox,
    noItemMessage,
    errorMessage,
    transformData,
    promise,
  } = props;
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(null);
  const [isAutoComplete, setIsAutoComplete] = useState(autoComplete); //if the user ht entr than it should not make any other api call
  const [data, setData, error] = useFetchPromise(
    query,
    transformData,
    promise,
    debounceWait,
    isAutoComplete
  );

  const handleChange = (event) => {
    setQuery(event.target.value);
  };
  const handleKeyUp = (event) => {
    // if user clicked on uparrow and downarrow
    const keyCode = event.keyCode;
    if (keyCode === 13) {
      // user Enter
      if (activeIndex === null) {
        return;
      }
      setQuery(data[activeIndex].name);
      setData(null); //if you hit enetr you should clear the list
      setActiveIndex(null);
      setIsAutoComplete(false); //if the user ht entr than it should not make any other api call
      return;
    }
    setIsAutoComplete(true);
    if (!data || data.length === 0) return; //if no data if we hit up and down arrow it throws error so we need to stop here
    if (keyCode === 40) {
      // Move Down
      if (activeIndex === null || activeIndex === data.length - 1) {
        // user pressing down for firstTime and fetched Data has last than move to top
        setActiveIndex(0);
      } else {
        setActiveIndex((prevIndex) => prevIndex + 1);
      }
    } else if (keyCode === 38) {
      // move Up
      if (activeIndex === 0) {
        // User press up when no item is selected than move to last index
        setActiveIndex(data.length - 1);
      } else {
        setActiveIndex((prevIndex) => prevIndex - 1);
      }
    }
  };
  return (
    <div>
      <label className={styles.label} for={name}>
        {label}
      </label>
      <br />
      <input
        name={name}
        className={styles.input}
        id={id}
        value={query}
        onChange={handleChange}
        placeholder={Placeholder}
        autoComplete="off"
        onKeyUp={handleKeyUp}
      />
      {data && data.length > 0 && ListBox(data, activeIndex)}
      {query && data && data.length === 0 && noItemMessage()}
      {error && errorMessage()}
    </div>
  );
};

export default Searchbox;
