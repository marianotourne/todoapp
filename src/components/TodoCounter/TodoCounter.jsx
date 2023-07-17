import "./TodoCounter.css";

export const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className="TodoCounterTitle">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
};
