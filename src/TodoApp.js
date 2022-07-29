import { useState } from "react";
import TodoList from "./TodoList";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Finish Todo App", completed: false },
    { id: 2, task: "Finish Dummy-shop App", completed: false },
    { id: 3, task: "Finish Portfolio Website", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <Paper
      elevation={0}
      sx={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar position="static" color="primary" sx={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <TodoList todos={todos} />
    </Paper>
  );
}

export default TodoApp;
