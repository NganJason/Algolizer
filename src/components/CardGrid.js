import React from "react";
import Card from "./Card";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CardGrid = () => {
  return (
    <div>
      <div className="card-grid">
        <Link to="/pathfinder">
          <Card
            title="Path Finder"
            subtitle="Use Dijsktra and A Star algorithm to find the shortest path between two points."
            vid="video/pathfinder3.mov"
          ></Card>
        </Link>
        <Link to="/sorting">
          <Card
            title="Sorting"
            subtitle="Use multiple sorting algorithms to sort blocks with different heights."
            vid="video/sorting3.mov"
          ></Card>
        </Link>
        <Link to="/backtracking">
          <Card
            title="Backtracking"
            subtitle="Use backtracking algorithm to easily solve a sudoku board."
            vid="video/backtracking.mov"
          ></Card>
        </Link>
      </div>
    </div>
  );
};

export default CardGrid;
