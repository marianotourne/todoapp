import ReactDOM from "react-dom";
import "./Modal.css";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modalBackground">
      <div className="modal-box">{children}</div>
    </div>,
    document.getElementById("modal")
  );
};
