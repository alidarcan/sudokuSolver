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

  // Function to solve Sudoku
  const solveSudoku = () => {
    const solvedGrid = [...grid]; // Copy the grid to not mutate the original
    if (solve(solvedGrid)) {
      setGrid(solvedGrid);
    } else {
      alert("No solution exists.");
    }
  };

  // Backtracking solver function
  const solve = (grid) => {
    const emptyPos = findEmptyPosition(grid);
    if (!emptyPos) {
      return true; // Puzzle solved
    }

    const [row, col] = emptyPos;

    // Try numbers 1-9
    for (let num = 1; num <= 9; num++) {
      if (isValidMove(grid, row, col, num)) {
        // Try placing the number
        grid[row][col] = num;

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
  const findEmptyPosition = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          return [row, col];
        }
      }
    }
    return null;
  };

  // Function to check if a move is valid
  const isValidMove = (grid, row, col, num) => {
    return (
      !usedInRow(grid, row, num) &&
      !usedInColumn(grid, col, num) &&
      !usedInBox(grid, row - (row % 3), col - (col % 3), num)
    );
  };

  // Helper functions for validation
  const usedInRow = (grid, row, num) => {
    return grid[row].includes(num);
  };

  const usedInColumn = (grid, col, num) => {
    for (let row = 0; row < 9; row++) {
      if (grid[row][col] === num) {
        return true;
      }
    }
    return false;
  };

  const usedInBox = (grid, startRow, startCol, num) => {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        if (grid[row + startRow][col + startCol] === num) {
          return true;
        }
      }
    }
    return false;
  };

  // Function to handle changes in the Sudoku grid
  const handleGridChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value;
    setGrid(newGrid);
  };

  return (
    <div className="sudoku-solver">
      <h1>Sudoku Solver</h1>
      <div className="sudoku-grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="sudoku-row">
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                data-row={rowIndex}
                data-col={colIndex}
                className="cell"
                type="number"
                value={cell === 0 ? "" : cell}
                onChange={(e) =>
                  handleGridChange(
                    rowIndex,
                    colIndex,
                    parseInt(e.target.value, 10) || 0
                  )
                }
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={solveSudoku}>Solve Sudoku</button>
    </div>
  );
}

export default SudokuSolver;
