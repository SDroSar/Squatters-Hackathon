import { Outlet, Link } from "react-router-dom";
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

const Layout = () => {
  return (
    <Container maxWidth="xl">
      {/* Logo or title */}
      <Typography variant="h6">LOGO</Typography>

      {/* Desktop Navigation */}
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        <Button>Bingo</Button>
        <Button>Bingo</Button>
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

export default Layout;
