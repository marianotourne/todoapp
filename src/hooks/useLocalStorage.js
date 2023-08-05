import { useState, useEffect } from "react";

export const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const LSItem = localStorage.getItem(itemName);
        let parsedItem;

        if (LSItem) {
          parsedItem = JSON.parse(LSItem);
          setItem(parsedItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  }, []);

  // This function update localStorage and update todos
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
};

// localStorage.removeItem("TODOS_V1");
//
// const defaultTodos = [
//   { text: "Aprender React", completed: false },
//   { text: "Crear array default todos", completed: true },
//   { text: "Inicializar el proyecto en git", completed: false },
//   { text: "Cambiar colores de estilos", completed: false },
//   { text: "Ir a la peña", completed: true },
//   { text: "Ir al cine", completed: false },
// ];

// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));
