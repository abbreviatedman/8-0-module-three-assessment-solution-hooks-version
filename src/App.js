import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Locations from "./components/Locations";
import Movies from "./components/Movies";
import People from "./components/People";
import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/">
            <h1>Welcome to GhibliApp</h1>
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
