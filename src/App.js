import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
