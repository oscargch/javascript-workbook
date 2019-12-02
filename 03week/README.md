1. Get the start stack and end stack values(either through user input or test values).
  -Pass those values to isLegal function.
  -Pass those value to movePiece function.

2. Check to make sure a piece is allowed to move (isLegal function).
  -Nice to have: Return an error message(string) values to determine if it would be a legal move based off the rules of the game(should be 'a', 'b', or 'c')
    -startStack and endStack should be different letters.
    -Access the numbers inside the arrays that correspond to the startStack/endStack values ('a', 'b', or 'c'), these are the keys of the stacks objects.
    -A bigger number cannot go on top of a small number.
      -Any number can be placed onto an empty stack (0) (array inside the stacks object).
    -Use the startStack and endStack values inside of the isLegal function.
    -Nice to have: further input validation like making sure the startStack/endStack value are 1 character long (there are a lot of other cases to think about too)
    
3. Move a piece from one stack to another(movePiece function).
  -Update the stacks object inside of the movePiece function using the startStack and endStack values.
  -Take the value from the end of the startStack array and add it to the end of the endStack array.
  -Maybe use .pop?, .shift?, or different array methods.
  
4. Check to see if the game is won.(checkForWin function)
  -When all the blocks are stacked into column 2 or 1 the user is told they won!
  -Nice to have: console log a winning message.
  4.a. If stack 1 or 2 have the pyramid.

  -prompt for input.
  -remove extra characters from input.
