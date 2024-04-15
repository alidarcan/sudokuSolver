import React from "react";

export default function Table() {
  const [sudoku, setSudoku] = React.useState([
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
    ["1","2","3","4","5","6","7","8","9"],
  ])
  return (
    <sudoku>
      <p>This is table</p>
      <div className="sudoku-grid">
        <div className="cube-1">
          <div className="c-1 r-1">1</div>
          <div className="c-2 r-1">2</div>
          <div className="c-3 r-1">3</div>
          <div className="c-1 r-2">4</div>
          <div className="c-2 r-2">5</div>
          <div className="c-3 r-2">6</div>
          <div className="c-1 r-3">7</div>
          <div className="c-2 r-3">8</div>
          <div className="c-3 r-3">9</div>
        </div>
        <div className="cube-2">
          <div className="c-4 r-1"></div>
          <div className="c-5 r-1"></div>
          <div className="c-6 r-1"></div>
          <div className="c-4 r-2"></div>
          <div className="c-5 r-2"></div>
          <div className="c-6 r-2"></div>
          <div className="c-4 r-3"></div>
          <div className="c-5 r-3"></div>
          <div className="c-6 r-3"></div>
        </div>
        <div className="cube-3">
          <div className="c-7 r-1"></div>
          <div className="c-8 r-1"></div>
          <div className="c-9 r-1"></div>
          <div className="c-7 r-2"></div>
          <div className="c-8 r-2"></div>
          <div className="c-9 r-2"></div>
          <div className="c-7 r-3"></div>
          <div className="c-8 r-3"></div>
          <div className="c-9 r-3"></div>
        </div>
        <div className="cube-4">
          <div className="c-1 r-4"></div>
          <div className="c-2 r-4"></div>
          <div className="c-3 r-4"></div>
          <div className="c-1 r-5"></div>
          <div className="c-2 r-5"></div>
          <div className="c-3 r-5"></div>
          <div className="c-1 r-6"></div>
          <div className="c-2 r-6"></div>
          <div className="c-3 r-6"></div>
        </div>
        <div className="cube-5">
          <div className="c-4 r-4"></div>
          <div className="c-5 r-4"></div>
          <div className="c-6 r-4"></div>
          <div className="c-4 r-5"></div>
          <div className="c-5 r-5"></div>
          <div className="c-6 r-5"></div>
          <div className="c-4 r-6"></div>
          <div className="c-5 r-6"></div>
          <div className="c-6 r-6"></div>
        </div>
        <div className="cube-6">
          <div className="c-7 r-4"></div>
          <div className="c-8 r-4"></div>
          <div className="c-9 r-4"></div>
          <div className="c-7 r-5"></div>
          <div className="c-8 r-5"></div>
          <div className="c-9 r-5"></div>
          <div className="c-7 r-6"></div>
          <div className="c-8 r-6"></div>
          <div className="c-9 r-6"></div>
        </div>
        <div className="cube-7">
          <div className="c-1 r-7"></div>
          <div className="c-2 r-7"></div>
          <div className="c-3 r-7"></div>
          <div className="c-1 r-8"></div>
          <div className="c-2 r-8"></div>
          <div className="c-3 r-8"></div>
          <div className="c-1 r-9"></div>
          <div className="c-2 r-9"></div>
          <div className="c-3 r-9"></div>
        </div>
        <div className="cube-8">
          <div className="c-4 r-7"></div>
          <div className="c-5 r-7"></div>
          <div className="c-6 r-7"></div>
          <div className="c-4 r-8"></div>
          <div className="c-5 r-8"></div>
          <div className="c-6 r-8"></div>
          <div className="c-4 r-9"></div>
          <div className="c-5 r-9"></div>
          <div className="c-6 r-9"></div>
        </div>
        <div className="cube-9">
          <div className="c-7 r-7"></div>
          <div className="c-8 r-7"></div>
          <div className="c-9 r-7"></div>
          <div className="c-7 r-8"></div>
          <div className="c-8 r-8"></div>
          <div className="c-9 r-8"></div>
          <div className="c-7 r-9"></div>
          <div className="c-8 r-9"></div>
          <div className="c-9 r-9"></div>
        </div>
      </div>
    </sudoku>
  );
}
