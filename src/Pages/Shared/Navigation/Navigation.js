import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import logo from "../../../images/logo-removebg.png"
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import './Navigation.css';

const Navigation = () => {
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem: {
      textDecoration: 'none',
      fontFamily: "poppins",
      fontWeight: 600
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: "none !important"
      }
    },

    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: "none !important"
      }
    },
    drawerItem: {
      textDecoration: "none",
      color: "black",
      fontFamily: 'poppins',
      fontSize: 15,
      fontWeight: 800,
    },
  })
  const { navItem, navIcon, navItemContainer, drawerItem } = useStyle();
  const [state, setState] = React.useState(false);

  const { user, logOut } = useAuth()
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className="app_bar" position="static">
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="warning"
              aria-label="menu"
              sx={{ mr: 0 }}
              className={navIcon}
              onClick={() => setState(true)}
            >
              <MenuIcon />
            </IconButton>
            <Link style={{ textDecoration: "none", flexGrow: 1 }} to='/'>
              <Typography className='logo-style' variant="h6" component="div" sx={{ fontSize: 21, fontFamily: "poppins", fontWeight: 500, }}>
                DAZZLE
              </Typography>
            </Link>

            <Box className={navItemContainer}>
              <Link
                className={navItem}
                to='/home'> <Button
                  className='navBtn'
                >HOME</Button>
              </Link>

              <Link className={navItem}
                to='/allPackages'><Button className='navBtn'>PACKAGES</Button></Link>

              {user?.email ?
                <>
                  <Link className={navItem} to='/dashboard'><Button className='navBtn'
                  >DASHBOARD</Button>
                  </Link>

                  <Button onClick={logOut}
                    className='navBtn-logout'>LOGOUT</Button>
                </>
                :
                <Link className={navItem} to='/login'>
                  <Button className='navBtn'>LOGIN</Button>
                </Link>
              }
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
      <div>

        <React.Fragment>
          <Drawer
            // style={{ backgroundColor: "black" }}
            open={state}
            onClose={() => setState(false)}
          >
            <Box sx={{ width: 200 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemText>
                    <Link className={drawerItem}
                      style={{ fontFamily: 'poppins', fontSize: 15, fontWeight: 600 }}
                      to="/home">HOME</Link>
                  </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button>
                  <ListItemText> <Link
                    className={drawerItem}
                    style={{ fontFamily: 'poppins', fontSize: 15, fontWeight: 600 }}
                    to="/allPackages">PACKAGES</Link></ListItemText>
                </ListItem>
                <Divider />

                {user?.email ?
                  <>
                    <ListItem button>
                      <ListItemText>
                        <Link className={drawerItem}
                          style={{ fontFamily: 'poppins', fontSize: 15, fontWeight: 600 }}
                          to="/dashboard">DASHBOARD
                        </Link>
                      </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText>
                        <Link
                          onClick={logOut}
                          className={drawerItem}
                          style={{ color: "#b71c1c", fontFamily: 'poppins', fontSize: 15, fontWeight: 600 }} color="error"
                          to="/login">
                          LOGOUT</Link>
                      </ListItemText>
                    </ListItem>
                  </>
                  :
                  <ListItem button>
                    <ListItemText>
                      <Link
                        className={drawerItem}
                        style={{ textDecoration: "none", color: "dark", fontFamily: 'poppins', fontSize: 15, fontWeight: 600 }} color="inherit"
                        to="/login">
                        LOGIN</Link>
                    </ListItemText>
                  </ListItem>
                }
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      </div>
    </>
  );
};

export default Navigation;