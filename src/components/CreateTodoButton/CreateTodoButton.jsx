import "./CreateTodoButton.css";

export const CreateTodoButton = () => {
  return (
    <button
      className="CreateTodoButton"
      onClick={() => console.log("Clic en CreateTodoButton")}
    >
      +
    </button>
  );
};
