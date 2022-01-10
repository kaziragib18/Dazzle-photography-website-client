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

const Navigation = () => {
  const theme = useTheme()
  const useStyle = makeStyles({
    navItem: {
      color: 'lightgray',
      textDecoration: 'none'
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
        <AppBar style={{ backgroundColor: "#212121" }} position="static">
          <Toolbar >
            <IconButton
              size="large"
              edge="start"
              color="warning"
              aria-label="menu"
              sx={{ mr: 0 }}
              className={navIcon}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, }}>
              DAZZLE
            </Typography>

            <Box className={navItemContainer}>
              <Link
                className={navItem}
                to='/home'> <Button color="warning"
                  sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}
                >Home</Button>
              </Link>

              <Link className={navItem}
                to='/allPackages'><Button color="warning"
                  sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}>Packages</Button></Link>

              {user?.email ?
                <>
                  <Link className={navItem} to='/dashboard'><Button color="warning"
                    sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}>Dashboard</Button>
                  </Link>

                  <Button onClick={logOut} color="inherit"
                    sx={{ color: "#b71c1c", fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}>Logout</Button>
                </>
                :
                <Link className={navItem} to='/login'>
                  <Button color="warning"
                    sx={{ fontFamily: "poppins", fontWeight: "500", fontSize: "17px" }}>Login</Button>
                </Link>
              }
            </Box>

          </Toolbar>
        </AppBar>
      </Box>
      <div>
        <React.Fragment>
          <Drawer
            open={state}
            onClose={() => setState(false)}
          >
            <Box sx={{ width: 250 }} role="presentation">
              <List>
                <ListItem button>
                  <ListItemText>
                    <Link className={drawerItem} to="/home">HOME</Link>
                  </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button>
                  <ListItemText> <Link className={drawerItem} to="/allPackages">ALL PACKAGES</Link></ListItemText>
                </ListItem>
                <Divider />

                {user?.email ?
                  <>
                    <ListItem button>
                      <ListItemText>
                        <Link className={drawerItem} to="/dashboard"><Button style={{ fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Dashboard</Button></Link>
                      </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText>
                        <Link className={drawerItem} to="/login"><Button onClick={logOut} style={{ color: "#b71c1c", fontFamily: 'poppins', fontSize: 16, marginBottom: 2, fontWeight: 700 }} color="error">Logout</Button></Link>
                      </ListItemText>
                    </ListItem>
                  </>
                  :
                  <ListItem button>
                    <ListItemText>
                      <Link className={drawerItem} to="/login"> <Button style={{ textDecoration: "none", color: "dark", fontFamily: 'poppins', fontSize: 14, fontWeight: 700 }} color="inherit">Login</Button></Link>
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