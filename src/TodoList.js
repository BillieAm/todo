import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

function TodoList(props) {
  const todos = props.todos.map((todo) => {
    return (
      <>
        <ListItem>
          <ListItemText key={todo.id}>{todo.task}</ListItemText>
        </ListItem>
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
