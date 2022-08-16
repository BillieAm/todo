// cSpell:words todos
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import { useContext } from "react";
import Todo from "./Todo";
import { TodosContext } from "../context/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  if (todos.length) {
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo {...todo} />
              {i < todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  }
  return <h2>No Todos For You 🤘</h2>;
}

export default TodoList;
