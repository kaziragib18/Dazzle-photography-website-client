import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Switch, Route, useRouteMatch } from "react-router-dom";
// import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import CameraEnhanceIcon from '@mui/icons-material/CameraEnhance';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardHome from '../DashboardHome/DashboardHome';
import AssignAdmin from '../../Dashboard/AssignAdmin/AssignAdmin'
import useAuth from '../../../hooks/useAuth';
import AddPackage from '../AddPackage/AddPackage';
import ManagePackages from '../ManagePackages/ManagePackages';

const drawerWidth = 223;

function Deashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [date, setDate] = React.useState();
  let { path, url } = useRouteMatch();
  const { admin } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const useStyle = makeStyles({
  //   btn: {
  //     fontFamily: 'poppins',
  //     fontSize: 17,
  //     fontWeight: 400
  //   },
  // })


  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Link style={{ padding: "5px", textDecoration: "none", color: "gray" }} to="/home"><HomeIcon />
        <Button color="inherit" sx={{ fontFamily: 'poppins', fontSize: 17, fontWeight: 400 }}> Home</Button>
      </Link>
      <br />
      <Link style={{ textDecoration: "none", color: "gray", padding: "5px" }} to="/allPackages"><CameraEnhanceIcon />
        <Button color="inherit" sx={{ fontFamily: 'poppins', fontSize: 17, fontWeight: 400 }}> All Packages</Button>
      </Link>
      <Divider />

      <Link style={{ padding: "5px", textDecoration: "none", color: "gray" }} to={`${url}`}><EventNoteOutlinedIcon />
        <Button color="inherit" sx={{ fontFamily: 'poppins', fontSize: 17, fontWeight: 400 }}>Booking</Button>
      </Link>
      <Divider />
      <Link style={{ padding: "5px", textDecoration: "none", color: "gray" }} to={`${url}/assignAdmin`}><GroupAddIcon />
        <Button color="inherit" sx={{ fontFamily: 'poppins', fontSize: 17, fontWeight: 400 }}>Assign Admin</Button>
      </Link>
      <Divider />

      <Link style={{ padding: "5px", textDecoration: "none", color: "gray" }} to={`${url}/addPackage`}><AddCircleOutlineIcon />
        <Button color="inherit" sx={{ fontFamily: 'poppins', fontSize: 17, fontWeight: 400 }}>Add Package</Button>
      </Link>
      <Divider />
      
      <Link style={{ padding: "5px", textDecoration: "none", color: "gray" }} to={`${url}/managePackages`}><AssignmentIcon />
        <Button color="inherit" sx={{ fontFamily: 'poppins', fontSize: 17, fontWeight: 400 }}>Manage Packages</Button>
      </Link>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>

          <Route exact path={path}>
            <DashboardHome date={date} setDate={setDate} />
          </Route>

          <Route path={`${path}/assignAdmin`}>
            <AssignAdmin />
          </Route>

          <Route path={`${path}/addPackage`}>
            <AddPackage />
          </Route>

          <Route path={`${path}/managePackages`}>
            <ManagePackages />
          </Route>

        </Switch>
      </Box>
    </Box>
  );
}

Deashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Deashboard;