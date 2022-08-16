// cSpell:words todos
import { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import todoReducer from "../todo.reducer";

const TodosContext = createContext();
const DispatchContext = createContext();

const defaultTodos = [];

function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos",
    defaultTodos,
    todoReducer
  );

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

export { TodosProvider, TodosContext, DispatchContext };
