import React, { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";
import "./TodoForm.css";

export const TodoForm = () => {
  const { setOpenModal, addTodo } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onCancel = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    newTodoValue ? addTodo(newTodoValue) : null;
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Escribe tu TODO"
        rows="4"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="todoButtonContainer">
        <button
          type="button"
          className="todoButton todoButtonCancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button type="submit" className="todoButton todoButtonAdd">
          Agregar
        </button>
      </div>
    </form>
  );
};
