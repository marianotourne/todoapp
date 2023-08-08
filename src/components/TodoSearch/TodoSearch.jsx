import "./TodoSearch.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { useContext } from "react";
import { TodoContext } from "../../context/TodoContext";

export const TodoSearch = () => {
  const { searchValue, setSearchValue, totalTodos } = useContext(TodoContext);

  return (
    <div className="todoSearchBox">
      {totalTodos ? (
        <>
          <input
            type="text"
            placeholder="Enter text to search"
            value={searchValue}
            className="todoSearchInput"
            onChange={(event) => setSearchValue(event.target.value)}
          />
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="iconClear"
            onClick={() => setSearchValue("")}
          />
        </>
      ) : null}
    </div>
  );
};
