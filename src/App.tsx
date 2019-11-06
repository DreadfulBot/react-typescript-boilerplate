import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/Router";

class App extends React.PureComponent<{}, {}> {
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default App;
