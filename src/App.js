import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import AllPackages from './Pages/AllPackages/AllPackages/AllPackages';
import AddPackage from './Pages/Dashboard/AddPackage/AddPackage';
import Register from './Pages/Login/Register/Register';
import AuthProvider from '../src/contexts/AuthProvider/AuthProvider'
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>

            <Route path="/home">
              <Home />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/allPackages">
              <AllPackages />
            </PrivateRoute>

            <Route path="/addPackage">
              <AddPackage />
            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
