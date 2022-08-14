// cSpell:words todos
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";

import { useContext } from "react";
import useInputState from "../hooks/useInputState";
import { TodosContext } from "../context/todos.context";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { dispatch } = useContext(TodosContext);

  return (
    <Paper style={{ margin: "1em 0", padding: "0 1em" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "ADD", task: value });
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add New Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
