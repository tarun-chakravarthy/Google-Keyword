import { useState } from "react";

export const useInputValue = (initialValue = "") => {
  const [inputValue, setInputValue] = useState(initialValue);

  return {
    inputValue,
    changeInput: (event) => setInputValue(event.target.value),
    clearInput: () => setInputValue(""),
    keyInput: (event, callback) => {
      if (event.which === 13 || event.keyCode === 13) {
        callback(inputValue);
        return true;
      }

      return false;
    },
  };
};

export const useWebsite = (initialValue = []) => {
  const [webSites, setWebsites] = useState(initialValue);

  return {
    webSites,
    addWebsite: (text) => {
      if (text !== "") {
        setWebsites(
          webSites.concat({
            text,
            checked: false,
          })
        );
      }
    },
    clearWebsite: (idx) => {
      setWebsites(webSites.filter((web, index) => idx !== index));
    },
  };
};
