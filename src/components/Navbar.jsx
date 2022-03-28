import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{ backgroundColor: "#000000", opacity: 0.5 }}
      >
        <Toolbar>
          <Typography variant="h8" component="div" sx={{ mr: 10 }}>
            <div>Squid Game</div>
          </Typography>
          <Typography
            variant="h8"
            component="div"
            sx={{
              display: "flex",
              gap: 2,
              cursor: "pointer",
              mx: "auto",
            }}
          >
            <LinkNavbar to={"/"}>
              <div>Home</div>
            </LinkNavbar>
            <div>Games</div>
            <div>Topskor</div>
            <LinkNavbar to={"/listplayer"}>
              <div>List Player</div>
            </LinkNavbar>
          </Typography>

          {isLogin ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>Profile</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Typography
              variant="h8"
              component="div"
              sx={{ display: "flex", gap: 2, cursor: "pointer" }}
            >
              <LinkNavbar to={"/login"}>
                <div>Login</div>
              </LinkNavbar>
              <LinkNavbar to={"/register"}>
                <div>Register</div>
              </LinkNavbar>
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const LinkNavbar = styled(Link)`
  color: white;
  text-decoration: none;
`;
