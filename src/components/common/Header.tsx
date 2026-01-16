import {
  AppBar,
  Toolbar,
  Box,
  Button,
  IconButton,
  Container,
  MenuItem,
  Select,
} from "@mui/material";
import { ShoppingCart, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/Logo.png";

const Header = () => {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar sx={{ display: "flex", gap: 3 }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={logoImg} alt="Grocery+" style={{ height: 40 }} />
          </Link>

          {/* Nav */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button component={Link} to="/" color="inherit">
              Home
            </Button>
            <Button component={Link} to="/categories" color="inherit">
              Categories
            </Button>
          </Box>

          {/* Search */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              maxWidth: 600,
              background: "#f2f2f2",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Select
              defaultValue="all"
              variant="standard"
              disableUnderline
              sx={{ px: 2, fontSize: 14 }}
            >
              <MenuItem value="all">All Categories</MenuItem>
            </Select>

            <input
              placeholder="Search for items...."
              style={{
                flex: 1,
                border: "none",
                background: "transparent",
                padding: "10px",
                outline: "none",
              }}
            />

            <IconButton className="bg-primary-btns! min-h-full " sx={{ background: "primary.main",height:'full', borderRadius: 0 }}>
              <Search color="white" size={18} />
            </IconButton>
          </Box>

          {/* Actions */}
          <Button
            startIcon={<ShoppingCart size={18} />}
            color="inherit"
          >
            My cart
          </Button>

          <Button
            variant="contained"
            startIcon={<User size={18} />}
            sx={{ borderRadius: 5 }}
            className="bg-primary-btns!"
          >
            Sarah's Profile
          </Button>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
