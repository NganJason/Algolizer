import React, { useState } from "react";
import { StyledCell } from "./styles/StyledCell";

const Cell = ({
  cell,
  type,
  callback,
  option,
  mouseDownHandler,
  mouseUpHandler,
  mouseEnterHandler,
  mouseDown,
}) => {
  return (
    <StyledCell
      id={`cell-${cell.row}-${cell.col}`}
      type={type}
      onClick={() => {
        callback(cell, option);
      }}
      onMouseDown={(e) => {
        mouseDownHandler(e);
      }}
      onMouseUp={(e) => {
        mouseUpHandler(e);
      }}
      onMouseEnter={(e) => {
        mouseEnterHandler(e, mouseDown, cell, option);
      }}
    ></StyledCell>
  );
};

export default Cell;
