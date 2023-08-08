import { useContext } from "react";
import "./CreateTodoButton.css";
import { TodoContext } from "../../context/TodoContext";

export const CreateTodoButton = () => {
  const { loading, error, setOpenModal } = useContext(TodoContext);

  const toggleModal = () => {
    setOpenModal((state) => !state);
  };

  return (
    <>
      {!loading && !error ? (
        <button className="CreateTodoButton" onClick={() => toggleModal()}>
          +
        </button>
      ) : null}
    </>
  );
};
