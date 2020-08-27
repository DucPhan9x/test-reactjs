import React from "react";
import { Button } from "react-bootstrap";
import classes from "./styles/App.module.css";
import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <div className={classes.textCenter}>
      <BrowserRouter>
        <Link to="/all-contacts">
          <Button className={classes.buttonA}>All Contacts</Button>
        </Link>
        <Link to="/us-contacts">
          <Button className={classes.buttonB}>US Contacts</Button>
        </Link>

        <Switch>
          <Route exact path="/all-contacts">
            <Contacts title="All Contacts"></Contacts>
          </Route>
          <Route exact path="/us-contacts">
            <Contacts title="US Contacts"></Contacts>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
