import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div></div>

      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}
// <Header />
export default App;
// <Route exact path="/" component={Homepage} />
