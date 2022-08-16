// cSpell:words todos
import TextField from "@mui/material/TextField";

import { useContext } from "react";
import useInputState from "../hooks/useInputState";
import { DispatchContext } from "../context/todos.context";

function EditTodoForm({ id, task, toggleEditForm }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "EDIT", id: id, newTask: value });
        toggleEditForm();
        reset();
      }}
      style={{ marginLeft: "1em", width: "100%" }}
    >
      <TextField
        value={value}
        onChange={handleChange}
        variant="standard"
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
