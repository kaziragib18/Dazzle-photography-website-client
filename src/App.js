import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import AllPackages from './Pages/AllPackages/AllPackages/AllPackages';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/allPackages">
            <AllPackages />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
