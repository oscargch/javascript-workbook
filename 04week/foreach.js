const array = [1, 12, 44];

/**
 * forEAch : 
 * 1. Go over aeach elment of the array
 * 2. Call a function over those elements
 * Inputs:
 * 1. Elemnets of the array
 * 2. The function to be called
 */

function forEach(arr, callback) {
  // iterating over elements of array using loops
  for ( index = 0 ; index < arr.length ; index++) {
    let item = arr[index];
    // array[i] -->> elemnet corresponding to index
    // i-- > index 
    callback(item, index, arr)
  } 
}

console.log(forEach(['a', 'b', 'c'], function (element, index, arr) {
  // var temp = index;
  console.log('letter is:',element, 'at index', index, 'in array', arr);
}));
