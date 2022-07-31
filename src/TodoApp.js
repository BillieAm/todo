import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Finish Todo App", completed: false },
    { id: 2, task: "Finish Dummy-shop App", completed: false },
    { id: 3, task: "Finish Portfolio Website", completed: true },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const addTodo = (newTodoText) => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <Paper
      elevation={0}
      style={{
        padding: 0,
        margin: 0,
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar position="static" color="primary" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1em" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
