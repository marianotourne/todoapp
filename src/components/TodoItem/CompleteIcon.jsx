import { TodoIcon } from "./TodoIcon";

export const CompleteIcon = ({ completed }) => {
  return <TodoIcon type="check" color={completed ? "green" : "white"} />;
};
