import "./App.css";

import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
