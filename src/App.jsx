import "./App.css";
import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton/CreateTodoButton";

const defaultTodos = [
  { text: "Aprender React", completed: false },
  { text: "Crear array default todos", completed: true },
  { text: "Inicializar el proyecto en git", completed: true },
  { text: "Deshacer último commit", completed: false },
  { text: "Ir a la peña", completed: false },
];

function App() {
  return (
    <>
      <TodoCounter completed={9} total={12} />
      <TodoSearch />
      <TodoList>
        {defaultTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
