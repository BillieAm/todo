// cSpell:words todos
import { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const todosContext = createContext();

const defaultTodos = [
  { id: 1, task: "something1", completed: false },
  { id: 1, task: "something2", completed: true },
];

function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);

  return (
    <todosContext.Provider value={todosStuff}>
      {props.children}
    </todosContext.Provider>
  );
}

export { TodosProvider, todosContext };
