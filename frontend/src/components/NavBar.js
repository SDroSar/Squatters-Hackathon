import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  Container,
  Box,
} from "@mui/material";
import TextField from "@mui/material/TextField";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100px",
        width: "100%",
        justifyContent: "space-between",
        top: 0,
        backgroundColor: "#EC9109",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Logo or title */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mx: 3,
        }}
      >
        <Typography variant="h3">aidLINK</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ ml: 1, color: "white", borderColor: "white" }}
          variant="Text"
          onClick={() => navigate("")}
        >
          Home
        </Button>
        <Button
          sx={{ ml: 1, color: "white", borderColor: "white" }}
          variant="Text"
          onClick={() => navigate("Login")}
        >
          Login
        </Button>
        <Button
          sx={{ ml: 1, color: "white", borderColor: "white" }}
          variant="Text"
          onClick={() => navigate("register")}
        >
          Register
        </Button>
      </Box>

      {/*        
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton>
              <MenuIcon />
            </IconButton>
           
            <Menu>
              {pages.map((page) => (
                <MenuItem key={page}>{page}</MenuItem>
              ))}
            </Menu>
          </Box> */}
    </Box>
  );
};

export default NavBar;
