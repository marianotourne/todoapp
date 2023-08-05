import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="TodoCounterTitle">
      {completedTodos === totalTodos && totalTodos
        ? "Felicitaciones, completaste todas las tareas!!"
        : null}
      {totalTodos.length == 0 ? "" : null}
      {completedTodos != totalTodos ? (
        <>
          Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
          TODOs
        </>
      ) : null}
    </h1>
  );
};
