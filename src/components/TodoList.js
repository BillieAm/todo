import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";

import Todo from "./Todo";

function TodoList(props) {
  const todos = props.todos.map((todo) => {
    return (
      <>
        <Todo key={todo.id} task={todo.task} completed={todo.completed} />
        <Divider />
      </>
    );
  });

  return (
    <Paper>
      <List>{todos}</List>
    </Paper>
  );
}

export default TodoList;
