import React, { useState } from "react";
import TriggerButton from "../components/TriggerButton";
import Cell from "../components/Cell";
import { StyledSudokuCell } from "../components/styles/StyledSudokuCell";
import { StyledStage } from "../components/styles/StyledStage";
import { sudoku_board, createBoard, resetSudokuCell } from "../utils";
import { solve_sudoku } from "../algorithms/backtracking";

const Backtracking = () => {
  const [board, setBoard] = useState(createBoard(sudoku_board));

  return (
    <div className="horizontal-box">
      <div className="sudoku-board">
        {board.map((row) => {
          return (
            <div className="sudoku-row">
              {row.map((cell) => {
                return (
                  <StyledSudokuCell
                    id={`cell-${cell.row}-${cell.col}`}
                    className="sudoku-cell"
                    isDefault={cell.isDefault}
                  >
                    {cell.val !== 0 ? cell.val : ""}
                  </StyledSudokuCell>
                );
              })}
            </div>
          );
        })}
      </div>
      <div className="sudoku-button">
        <TriggerButton
          text="Solve"
          variant="primary"
          callback={() => {
            let time_counter = [1];
            let board_copy = [...board];
            solve_sudoku(board_copy, 0, 0, time_counter);
            // setBoard(board_copy);
          }}
        ></TriggerButton>
        <TriggerButton
          text="Reset"
          variant="secondary"
          callback={() => {
            resetSudokuCell(board);
            setBoard(createBoard(sudoku_board));
          }}
        ></TriggerButton>
      </div>
    </div>
  );
};

export default Backtracking;
