import React, { useEffect, useState, useCallback } from "react";
// import debo
import debounce from "lodash/debounce";

const useFetchPromise = (
  query,
  transformData,
  promise,
  debounceWait,
  autoComplete
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = useCallback(
    debounce(async (query, transformData, signal) => {
      try {
        const response = await promise(query, signal);
        if (!response.ok) throw new Error(response.statusText);
        const data = await response.json();
        console.log(data);
        setData(transformData(data)); //so in the future i can tranfrm lets say e have data.results in future we may have data.response so
      } catch (err) {
        // the user has aborted the signal so, we should not set the error for that
        if (!signal.aborted) {
          console.log("err-------", err);
          setError(err);
        }
      }
    }, 400),
    []
  );
  useEffect(() => {
    if (!query || !autoComplete) {
      setData(null);
      setError(null);
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    fetchData(query, transformData, signal);
    // so whenever the query changes the cleanup function is going to run before rerendering the component
    // to clear the network signal

    return () => {
      controller.abort();
    };
  }, [query, transformData, fetchData]);
  return [data, setData, error];
};

export default useFetchPromise;

// so we are typing something and if we removed everything in search box , than
// iam making 2 or 3 api calls it should not acceptable
//  so we need to implement abortController in useEffect
//  if simultaneous network calls when the second call is made the first call should be aborted
// Canceeling newtwok calls
