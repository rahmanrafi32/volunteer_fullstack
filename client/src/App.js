import React from "react";
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddEvents from './Components/AddEvent/AddEvents';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addEvents">Events</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/addEvents">
            <AddEvents />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
 