'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};



function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {

  var result = isLegal(startStack, endStack);


  if (result === false) {
    console.log("Illegal move, my friend-O-LI-NO!");
  } else if (startStack === "a" && endStack === "b") {
    let popped = stacks.a.pop([]);
    stacks.b.push(popped);
  } else if (startStack === "a" && endStack === "c") {
    let popped = stacks.a.pop([]);
    stacks.c.push(popped);
  } else if (startStack === "a" && endStack === "a") {
    console.log("You have to move your piece into another stack.");
  } else if (startStack === "b" && endStack === "a") {
    let popped = stacks.b.pop([]);
    stacks.a.push(popped);
  } else if (startStack === "b" && endStack === "c") {
    let popped = stacks.b.pop([]);
    stacks.c.push(popped);
  } else if (startStack === "b" && endStack === "b") {
    console.log("You have to move your piece into another stack.");
  } else if (startStack === "c" && endStack === "a") {
  let popped = stacks.c.pop([]);
  stacks.a.push(popped);
  } else if (startStack === "c" && endStack === "b") {
    let popped = stacks.c.pop([]);
    stacks.b.push(popped);
  } else if (startStack === "c" && endStack === "c") {
    console.log("You have to move your piece into another stack.");
  }
}

function isLegal(startStackName, endStackName) {
  // Your code here

  // let num1 = 0;
  let startStack = stacks[startStackName];

  // If the startStack is empty, then the move is illegal.
  if (startStack.length == 0) {
    return false; // nothing to be moved
  }

  // It gets the number which will be moved. Last item from the array.
  let toBeMoved = startStack[startStack.length - 1];

// If the endStack is emtpy then we dont' need to do any further processing. Just say that the move is legal.  
  let endStack = stacks[endStackName];
  if (endStack.length == 0) {
    return true; // end stack is empty, then move is legal
  }
  
  // It gets the last element from the array. We will only get here (this program point / this statement) if there is any element in the array.
  let elementBehind = endStack[endStack.length - 1] ;

  //this is the if statment below in a shorter version.
  return toBeMoved < elementBehind

  // if (toBeMoved < elementBehind) {
  //   return true;
  // } else {
  //   return false;
  // }

}

function checkForWin() {
  // Your code heret

if (stacks.b.length === 4) {
  console.log("you win!");
  return true;
}
if (stacks.c.length === 4) {
  console.log("you win!");
  return true;
}

return false;
}
function towersOfHanoi(startStack, endStack) {

  let validArguments = ['a', 'b', 'c'];

  if (!validArguments.includes(startStack) || !validArguments.includes(endStack)) {
    return "Not a valid entry. Please only use a, b -or c.";
  }

  movePiece(startStack, endStack);
  checkForWin();

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      var possibleErrorMessage = towersOfHanoi(startStack, endStack);
      if (typeof possibleErrorMessage !== "undefined") {
        console.log(possibleErrorMessage);
      }
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    
    it('should be able to move a block', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
 //     towersOfHanoi('a', 'c');
//      assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
    });

    it('should be able to move a block to any spoke', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      towersOfHanoi('a', 'c');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [], c: [1] });
    });

    // it should be able to move another block
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });

    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });

  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
