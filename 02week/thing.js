const myString = "This is for your own personal journey. May you have excellent navigation as a developer using your own compass."

// findLongestWord(myString) => 'navigation', 10

// console.log(everyWordArray);

function findLongestWord() {
  let everyWordArray = myString.split(" ");
  var numberOfLetters = everyWordArray[0];
  for (var i = 0; i < everyWordArray.length - 1; i++) {
    if (numberOfLetters.length >= everyWordArray[i+1].length) {
      numberOfLetters = numberOfLetters;
    } else if (everyWordArray[i+1].length > numberOfLetters.length) {
      numberOfLetters = everyWordArray[i+1];
    }
  }
  console.log(numberOfLetters + ":", numberOfLetters.length);
}

findLongestWord(myString);
