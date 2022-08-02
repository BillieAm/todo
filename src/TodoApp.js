import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoState from "./hooks/useTodoState";

function TodoApp() {
  const initialTodos = JSON.parse(localStorage.getItem("todos")) || [];
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } =
    useTodoState(initialTodos);

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
          <Typography color="inherit">TODO APP</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justifyContent="center" style={{ marginTop: "1em" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
