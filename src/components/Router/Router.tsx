import React, { Component } from "react";
import { Switch, Route } from "react-router";
import SidebarRightLayoutPage from "../../containers/SidebarRightLayoutPage";

class Router extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={SidebarRightLayoutPage} />
      </Switch>
    );
  }
}

export default Router;
