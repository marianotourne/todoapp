import { useContext } from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../context/TodoContext";

export const TodoCounter = () => {
  const { completedTodos, totalTodos } = useContext(TodoContext);

  return (
    <h1 className="TodoCounterTitle">
      {completedTodos === totalTodos && totalTodos
        ? "Congratulations, you have completed all tasks!"
        : null}
      {totalTodos.length == 0 ? "" : null}
      {completedTodos != totalTodos ? (
        <>
          You have completed <span>{completedTodos}</span> of{" "}
          <span>{totalTodos}</span> tasks
        </>
      ) : null}
    </h1>
  );
};
