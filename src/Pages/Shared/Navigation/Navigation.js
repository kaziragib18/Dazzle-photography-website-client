import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../../images/logo-removebg.png"
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'

const Navigation = () => {
  const { user, logOut } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ backgroundColor: "#212121" }} position="static">
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 0 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img width="47px" src={logo} alt="logo" /><span style={{ color: "#ef6c00" }} >DAZ</span><span style={{ color: "#ff9800" }} >ZLE</span>
          </Typography>

          <Link
            style={{ textDecoration: "none", color: "lightgray" }}
            to='/home'> <Button color="inherit"
              sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}
            >Home</Button>
          </Link>

          <Link style={{ textDecoration: "none", color: "lightgray" }}
            to='/allPackages'><Button color="inherit"
              sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}>Packages</Button></Link>

          {user?.email ?

            <Button onClick={logOut} color="inherit"
              sx={{ color: "#b71c1c", fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}>Logout</Button>
            :
            <Link style={{ textDecoration: "none", color: "lightgray" }} to='/login'><Button color="inherit"
              sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}>Login</Button>
            </Link>
          }

        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;