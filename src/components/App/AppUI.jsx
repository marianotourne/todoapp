import { TodoCounter } from "../TodoCounter/TodoCounter";
import { TodoSearch } from "../TodoSearch/TodoSearch";
import { TodoList } from "../TodoList/TodoList";
import { TodoItem } from "../TodoItem/TodoItem";
import { CreateTodoButton } from "../CreateTodoButton/CreateTodoButton";
import { TodosLoading } from "../TodosLoading/TodosLoading";
import { TodosError } from "../TodosError/TodosError";
import { TodosCreate } from "../TodosCreate/TodosCreate";
import { TodoContext } from "../../context/TodoContext";
import { TodoForm } from "../TodoForm/TodoForm";
import { Modal } from "../Modal/Modal";
import { useContext } from "react";
import { Footer } from "../Footer/Footer";

export const AppUI = () => {
  const {
    loading,
    error,
    searchedTodos,
    toggleTodo,
    deleteTodo,
    totalTodos,
    openModal,
  } = useContext(TodoContext);

  return (
    <>
      <section>
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {loading ? <TodosLoading /> : null}
          {error ? <TodosError /> : null}
          {!loading && !error && totalTodos === 0 ? <TodosCreate /> : null}
          {searchedTodos.map((todo) => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => toggleTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </section>
      <section>
        <Footer />
      </section>

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};
