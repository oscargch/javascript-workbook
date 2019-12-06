'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color === "white") {
      this.symbol = "○";
    } else if (color == "black") {
      this.symbol = "●";
    } else {
      console.log("invalid color")
    }
  }
}

class Board {
  constructor() {
    this.grid = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
    // initialize the checkers
    this.checkers = []

    var whiteCheckersPositions = [[0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]];

    for (let position of whiteCheckersPositions) {
      let x = position[0]
      let y = position[1]
      this.addChecker(new Checker("white"), x, y);
    }

    var blackCheckersPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]];

    for (let position of blackCheckersPositions) {
      let x = position[0]
      let y = position[1]
      this.addChecker(new Checker("black"), x, y);
    }

  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  // Your code here
  addChecker(checker, row, col) {
    this.checkers.push(checker)
    this.grid[row][col] = checker;
  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
  }
  moveChecker(from, to) {
    var from_row = parseInt(from[0])
    var from_col = parseInt(from[1])

    var to_row = parseInt(to[0])
    var to_col = parseInt(to[1])

    if (Math.abs(from_row - to_row) == 2) {
      var attacked_row = (from_row + to_row)/2
      var attacked_col = (from_col + to_col)/2
      var attacked_checker = game.board.grid[attacked_row][attacked_col]
      game.board.grid[attacked_row][attacked_col] = null
      game.board.checkers = game.board.checkers.filter(checker => checker != attacked_checker)
    }

    var checker = game.board.grid[from_row][from_col]
    game.board.grid[from_row][from_col] = null
    game.board.grid[to_row][to_col] = checker

    // assume that we can only jump over one checker
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Checker', () => {
    it("It should have either black dot or white dot symbol and position", () => {// arrow functions function () {return .}
      var checker = new Checker("white");
      assert.equal(checker.symbol, "○");
      checker = new Checker("black");
      assert.equal(checker.symbol, "●");
    })
  })

  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board'); //game.board should be a object of class Board
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
    it("should have white checkers initialzied in the right places", () => {
      assert.equal(game.board.grid[0][3].symbol, "○");
      assert.equal(game.board.grid[2][5].symbol, "○");
    })
    it("should have black checkers initialzied in the right places", () => {
      assert.equal(game.board.grid[5][2].symbol, "●");
      assert.equal(game.board.grid[7][4].symbol, "●");
    })
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
