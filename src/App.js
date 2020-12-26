import "./App.css";
import Navbar from "./components/Navbar";
import PathFinder from "./screens/PathFinder";
import Sorting from "./screens/Sorting";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Backtracking from "./screens/Backtracking";
import Home from "./screens/Home";

function App() {
  // Hooks

  return (
    <Router>
      <div className="grid-container">
        <div className="nav">
          <Navbar />
        </div>
        <div className="main-body">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/pathfinder" component={PathFinder}></Route>
          <Route path="/sorting" component={Sorting}></Route>
          <Route path="/backtracking" component={Backtracking}></Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
