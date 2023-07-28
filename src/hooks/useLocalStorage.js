import React from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const LSItem = localStorage.getItem(itemName);

  let parsedItem;

  if (LSItem) {
    parsedItem = JSON.parse(LSItem);
  } else {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }

  const [item, setItem] = React.useState(parsedItem);

  // This function update localStorage and update todos
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
};
