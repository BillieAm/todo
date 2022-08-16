// cSpell:words todos
import { createContext, useReducer } from "react";
import todoReducer from "../todo.reducer";
import useTodoState from "../hooks/useTodoState";

const TodosContext = createContext();
const DispatchContext = createContext();

const defaultTodos = [];

function TodosProvider(props) {
  const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export { TodosProvider, TodosContext, DispatchContext };
