import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { padding } from "@mui/system";

function TodoApp() {
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
    </Paper>
  );
}

export default TodoApp;
