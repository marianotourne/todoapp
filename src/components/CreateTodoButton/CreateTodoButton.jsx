import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../context/TodoContext";

export const CreateTodoButton = () => {
  const { loading, error } = useContext(TodoContext);

  return (
    <>
      {!loading && !error ? (
        <button
          className="CreateTodoButton"
          onClick={() => console.log("Clic en CreateTodoButton")}
        >
          +
        </button>
      ) : null}
    </>
  );
};
