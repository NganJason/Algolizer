import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 className="navbrand">Algolizer</h1>
        </Link>
      </div>
      <div className="navItems">
        <div>
          <Link to="/" className="navItem">
            Home
          </Link>
        </div>
        <div>
          <Link to="/pathfinder" className="navItem">
            Path Finder
          </Link>
        </div>
        <div>
          <Link to="/sorting" className="navItem">
            Sorting
          </Link>
        </div>
        <div>
          <Link to="/backtracking" className="navItem">
            Backtracking
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
