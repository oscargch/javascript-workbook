//first in the right location
//second that are there

'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess) {
  const solutionArray = solution.split('');
  
  const guessArray = guess.split('');

  let redPegs = 0;
  let whitePegs = 0;


//checking for red pegs
  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      redPegs++;
      solutionArray[i] = null;
    }
  }

  let targetIndex = null;
  //checking for white pegs
  for (let i = 0; i < guessArray.length; i++) {
    targetIndex = solutionArray.indexOf(guessArray[i]);

    if (targetIndex > -1) {
      whitePegs++;
      solutionArray[targetIndex] = null;
    }
   
    // if (solutionArray[i] === guess[i]) {
    //   regPegs++;
    //   return solutionArray[i] = null;
    // }
    // solutionArray[i]
    // guessArray[i]
  }
  // let hint = `${redPegs}-${whitePegs}`;
// Define a var called hint that collects the returned value of generateHint(guess). .push the guess and the hint (as a combined string) into the board.

  //return a string representation of redPegs and whitePegs variables
  //return 'x-x';
  return `${redPegs}-${whitePegs}`;
// return redPegs + '-' + whitePegs;
}

function mastermind(guess) {
  solution = 'abcd'; 
  // Comment this out to generate a random solution
  // your code here


  if (guess === solution) {
    return 'You guessed it!';
  }
}

function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
