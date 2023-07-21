import './TodoSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

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
      <FontAwesomeIcon
        icon={faCircleXmark}
        className="iconClear"
        onClick={() => setSearchValue('')}
      />
    </div>
  );
};
