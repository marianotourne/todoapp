import "./TodoSearch.css";

export const TodoSearch = () => {
  return (
    <div className="todoSearchBox">
      <input
        type="text"
        placeholder="Ingrese texto a buscar"
        className="todoSearchInput"
      />
    </div>
  );
};
