import React from "react";
function SudokuSolver() {
  const [grid, setGrid] = React.useState([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ]);

  const solveSudoku = function () {
    const solvedGrid = [...grid];
    if (solve(solvedGrid)) {
      setGrid(solvedGrid);
    } else {
      alert("No Solution Exists.");
    }
  };
  const solve = function (grid) {
    const emptyPos = findEmptyPosition(grid);
    if (!emptyPos) {
      return true;
    }
    const [row, col] = emptyPos;

    // Try Numbers
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(grid, row, col, num)) {
        grid[(row, col)] = num;

        // Recursively solve
        if (solve(grid)) {
          return true;
        }

        // Backtrack
        grid[row][col] = 0;
      }
    }
    // No solution found
    return false;
  };

  // Function to find empty position
  function findEmptyPosition(grid) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null;
  }

  // Function to check if a move is valid
  function isValidMove(grid, row, col, num) {
    return (
      !usedInRow(grid, row, num) &&
      !usedInCol(grid, col, num) &&
      !usedInBox(grid, row - (row % 3), col - (col % 3), num)
    );
  }

  function usedInRow(grid, row, num){
    
  }
}
export default SudokuSolver;
