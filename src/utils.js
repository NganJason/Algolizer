export const STAGE_WIDTH = 70;
export const STAGE_HEIGHT = 25;

export const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

// Path finder
export const createPathCell = (row, col) => {
  return {
    type: "",
    row: row,
    col: col,
    f_score: null,
    g_score: null,
    h_score: null,
    parent: null,
  };
};

export const createStage = () => {
  let stage = [];
  for (let row = 0; row < STAGE_HEIGHT; row++) {
    let stage_row = [];
    for (let col = 0; col < STAGE_WIDTH; col++) {
      let cell = createPathCell(row, col);
      stage_row.push(cell);
    }
    stage.push(stage_row);
  }
  return stage;
};

// Backtracking

export const sudoku_board = [
  [6, 0, 9, 0, 0, 4, 0, 0, 1],
  [8, 0, 0, 0, 5, 0, 0, 0, 0],
  [0, 3, 5, 1, 0, 9, 0, 0, 8],
  [0, 0, 8, 0, 0, 0, 0, 0, 4],
  [0, 5, 0, 0, 0, 0, 0, 3, 0],
  [4, 0, 0, 0, 7, 0, 0, 5, 2],
  [0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 4, 0, 0, 0, 0],
  [7, 6, 0, 9, 3, 0, 0, 0, 0],
];

export const createSudokuCell = (val, row, col) => {
  if (val === 0) {
    return {
      val: 0,
      row: row,
      col: col,
      isDefault: false,
    };
  } else {
    return {
      val: val,
      row: row,
      col: col,
      isDefault: true,
    };
  }
};

export const createBoard = (arr) => {
  let board = [];

  for (let row = 0; row < arr.length; row++) {
    let board_row = [];
    for (let col = 0; col < arr[0].length; col++) {
      let board_cell = createSudokuCell(arr[row][col], row, col);
      board_row.push(board_cell);
    }
    board.push(board_row);
  }
  return board;
};

export const resetSudokuCell = (board) => {
  board.map((row) => {
    row.map((cell) => {
      if (cell.isDefault === false) {
        let cellElmt = document.getElementById(`cell-${cell.row}-${cell.col}`);
        cellElmt.textContent = "";
      }
    });
  });
};

// Sorting

export const createBlock = (idx) => {
  return {
    height: Math.floor(Math.random() * 90),
    index: idx,
  };
};

export const createBlocks = (width) => {
  let blocks = new Array(width);
  for (let i = 0; i < blocks.length; i++) {
    blocks[i] = createBlock(i);
  }

  return blocks;
};

export const resetBlockHeight = (blocks) => {
  let newBLock = blocks.map((block, idx) => {
    let block_elmt = document.getElementById(`block-${idx}`);
    block_elmt.style.height = "";
  });
};
