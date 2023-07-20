import './TodoSearch.css';

export const TodoSearch = ({ searchValue, setSearchValue }) => {
  return (
    <div className="todoSearchBox">
      <input
        type="text"
        placeholder="Ingrese texto a buscar"
        value={searchValue}
        className="todoSearchInput"
        onChange={(event) => setSearchValue(event.target.value)}
      />
    </div>
  );
};
