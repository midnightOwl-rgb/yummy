import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import WelcomeCard from "./Welcome.Card";

/** React Bootstrap */
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/signup">
          <Users />
        </Route>
        <Route path="/">
          <WelcomeCard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
