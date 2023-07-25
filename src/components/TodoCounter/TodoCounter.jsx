import "./TodoCounter.css";

export const TodoCounter = ({ completed, total }) => {
  return (
    <h1 className="TodoCounterTitle">
      {completed === total ? (
        "Felicitaciones, completaste todas las tareas!!"
      ) : (
        <>
          Completaste <span>{completed}</span> de <span>{total}</span> TODOs
        </>
      )}
    </h1>
  );
};
