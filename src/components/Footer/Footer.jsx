import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
// import { faTwitter } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
  return (
    <li className="TodoItem">
      <FontAwesomeIcon icon={faCircleUser} />
      <ul>Mariano</ul>
    </li>
  );
};
