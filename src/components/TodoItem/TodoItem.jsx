/* eslint-disable react/prop-types */
import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon";
import "./TodoItem.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck, faTrashCan } from "@fortawesome/free-regular-svg-icons";

export const TodoItem = (props) => {
  return (
    <li className="TodoItem">
      {/* <FontAwesomeIcon
        icon={faCircleCheck}
        className={`iconCheck ${props.completed && "iconCheckActive"}`}
        onClick={props.onComplete}
      /> */}
      <CompleteIcon completed={props.completed} />
      <p className={`${props.completed && "TodoItemCompleted"}`}>
        {props.text}
      </p>
      {/* <FontAwesomeIcon
        icon={faTrashCan}
        className="iconDelete"
        onClick={props.onDelete}
      /> */}
      <DeleteIcon />
    </li>
  );
};
