import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Launches from "./containers/Launches";
import Details from "./containers/Launches/Details";

const Routers = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Launches} />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </Router>
    </div>
  );
};

export default Routers;
