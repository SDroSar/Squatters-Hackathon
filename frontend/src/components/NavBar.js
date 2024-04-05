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

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        height: "100px",
        width: "100%",
        justifyContent: "space-between",
        top: 0,
        backgroundColor: "#3b3b3b",
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
        <Button sx={{ mx: 1 }} variant="contained" onClick={() => navigate("")}>
          Home
        </Button>
        <Button variant="contained" onClick={() => navigate("register")}>
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
    </Container>
  );
};

export default NavBar;
