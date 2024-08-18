import {  useState } from "react";
import "./sudokuStyle/sudoku.css";
const Sudoku = () => {
  const initialGrid = [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9],
  ];
  const [grid, setGrid] = useState(initialGrid);
  const [win, setWin] = useState(false);

  const validPlaceMent = (
    grid: (string | number)[][],
    row: number,
    col: number,
    value: string
  ) => {
    const isValidInRow = (
      grid: { [x: string]: number[] },
      row: string | number,
      value: string
    ) => !grid[row].includes(Number(value));

    const isValidInColumn = (
      grid: { [x: string]: string }[],
      col: string | number,
      num: string
    ) => !grid.some((row: { [x: string]: string }) => row[col] === num);

    const isValidGrid = (
      row: number | string,
      col: number | string,
      value: string
    ) => {
      row = Number(row);
      col = Number(col);
      const startRow = Math.floor((row / 3) * 3);
      const startCol = Math.floor((col / 3) * 3);
      const gridI = startRow - (startRow % 3);
      const gridJ = startCol - (startCol % 3);
      for (let i = gridI; i <= gridI + 2; i++) {
        for (let j = gridJ; j <= gridJ + 2; j++) {
          console.log(grid[i][j], value);
          if (grid[i][j] === Number(value)) {
            return false;
          }
        }
      }
      return true;
    };

    return (
      isValidGrid(row, col, value) &&
      isValidInColumn(grid, col, value) &&
      isValidInRow(grid, row, value)
    );
  };
  const handleChange = (row: number, col: number, value: string) => {
    if (Number(value) < 1 || Number(value) > 9) return;
    if (!validPlaceMent(grid, row, col, value)) {
      alert("Invalid move! This number violates Sudoku rules.");
      return;
    }
    const newGrid = grid.map((rowArr, rowIndex) =>
      rowArr.map((cell: number | string, colIndex: number) => {
        if (rowIndex === row && colIndex === col) {
          return Number(value);
        }
        return cell;
      })
    );
    setGrid(newGrid);
  };
  
  const checkWin = () => {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === "" || !validPlaceMent(grid, i, j, String(grid[i][j]))) {
          setWin(false);
          return;
        }
      }
    }
    setWin(true);
  };
  return (
    <div className="sudoku-grid">
      {win && <p>You win!</p>}
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="sudoku-row">
          {row.map((cell: number | string, colIndex: number) => (
            <input
              key={colIndex}
              type="text"
              value={cell}
              maxLength={1}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
              className="sudoku-cell"
            />
          ))}
        </div>
      ))}
      <button onClick={checkWin}>Check win </button>
    </div>
  );
};

export default Sudoku;
