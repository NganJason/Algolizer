import { useState, useEffect } from "react";
import { createStage, isEmpty } from "../../utils";

export const useStage = (location, setLocation) => {
  const [stage, setStage] = useState(createStage());

  const resetStage = (resetStartEnd) => {
    resetCellColor(stage);
    let newStage = createStage();

    if (resetStartEnd) {
      setLocation({
        start: null,
        end: null,
        block: {},
        open: {},
        close: {},
      });
    } else {
      newStage = resetCellType(stage);
    }
    setStage(newStage);
  };

  const updateStage = (prevStage) => {
    // Flush out the old cells
    const newStage = prevStage.map((row) =>
      row.map((cell) => {
        if (cell.type === "start" || cell.type === "end") {
          let cell_copy = { ...cell, type: "" };
          return cell_copy;
        } else {
          let cell_copy = { ...cell };
          return cell_copy;
        }
      })
    );
    if (!isEmpty(location.start)) {
      newStage[location.start.row][location.start.col].type = "start";
    }
    if (!isEmpty(location.end)) {
      newStage[location.end.row][location.end.col].type = "end";
    }
    if (!isEmpty(location.block)) {
      newStage[location.block.row][location.block.col].type = "block";
    }
    if (!isEmpty(location.close)) {
      newStage[location.close.row][location.close.col].type = "close";
    }
    if (!isEmpty(location.open)) {
      newStage[location.open.row][location.open.col].type = "open";
    }
    return newStage;
  };

  useEffect(() => {
    setStage((prev) => updateStage(prev));
  }, [location]);

  return [stage, setStage, resetStage];
};

export const resetCellColor = (stage) => {
  let newStage = stage.map((row) => {
    row.map((cell) => {
      let node = document.getElementById(`cell-${cell.row}-${cell.col}`);
      node.classList.remove("node-visited");
      node.classList.remove("node-shortest-path");
    });
  });
};

export const resetCellType = (stage) => {
  let newStage = stage.map((row) => {
    return row.map((cell) => {
      if (
        cell.type === "start" ||
        cell.type === "end" ||
        cell.type === "block"
      ) {
        let cell_copy = { ...cell };

        return cell_copy;
      } else {
        let cell_copy = { ...cell, type: "" };
        return cell_copy;
      }
    });
  });
  return newStage;
};
