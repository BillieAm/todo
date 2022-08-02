import { useState, useEffect } from "react";

function useLocalStorage(key, initialVal) {
  // make piece of state based off of value in localStorage or default
  const [state, setState] = useState(() => {
    let val;
    try {
      val = JSON.parse(localStorage.getItem(key) || String(initialVal));
    } catch (e) {
      val = initialVal;
    }
    return val;
  });

  // use useEffect to update localStorage when state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;
