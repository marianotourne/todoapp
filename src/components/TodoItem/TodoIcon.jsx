// import checkSVG from "../../assets/icons/check.svg";
// import deleteSVG from "../../assets/icons/delete.svg";
// import "./TodoIcon.css";

// const iconTypes = {
//   check: <img src={checkSVG} alt="Check" />,
//   delete: <img src={deleteSVG} alt="Delete" />,
// };

// export const TodoIcon = ({ type }) => {
//   return (
//     // <span className={`icon${type}`} onClick={`props.on$ {type}`}>
//     <span className={`icon${type}`}>{iconTypes[type]}</span>
//   );
// };

import { ReactSVG } from "react-svg";
import CheckSVG from "../../assets/icons/check.svg";
import DeleteSVG from "../../assets/icons/delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => (
    <ReactSVG src={CheckSVG} className="icon-svg" fill={color} />
  ),
  delete: (color) => (
    <ReactSVG src={DeleteSVG} className="icon-svg" fill={color} />
  ),
};

export const TodoIcon = ({ type }) => {
  return <span className={`icon-container-${type}`}>{iconTypes[type]}</span>;
};
