import React from "react";

import { useLocalStorage } from "../../hooks/useLocalStorage";
import { AppUI } from "./AppUI";

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
//
// localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos));

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  });

  const toggleTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text != text);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      loading={loading}
      error={error}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleTodo={toggleTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
