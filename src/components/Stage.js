import React, { useState } from "react";
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";

const Stage = ({ stage, option, callback }) => {
  const [mouseDown, setMouseDown] = useState(false);

  const mouseDownHandler = (e) => {
    setMouseDown(true);
  };

  const mouseUpHandler = (e) => {
    setMouseDown(false);
  };

  const mouseEnterHandler = (e, mouseDown, cell, option) => {
    if (mouseDown) {
      let cellElmt = document.getElementById(e.target.id);
      cellElmt.style.backgroundColor = "";

      callback(cell, option);
    }
  };

  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row, y) => {
        return row.map((cell, x) => {
          return (
            <Cell
              key={x}
              cell={cell}
              type={cell.type}
              option={option}
              callback={callback}
              mouseDownHandler={mouseDownHandler}
              mouseUpHandler={mouseUpHandler}
              mouseEnterHandler={mouseEnterHandler}
              mouseDown={mouseDown}
            />
          );
        });
      })}
    </StyledStage>
  );
};

export default Stage;
