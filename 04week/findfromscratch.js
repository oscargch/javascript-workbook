const array = [1, 12, 44];

function findFromScratch (arr,  fn) { // all names different 
  //your code here
  //use some kind of loop to go through the array and the 
  //first element that causes passed in function to return true.
  //once that happens stop and return the current value of the array.
  for (var index = 0 ; index < arr.length ; index++) {
    let element = arr[index];
    // console.log("Element is : ", element, "Index is ", index);
    var passedFunctionResult = fn(element, index, arr);
    if (passedFunctionResult) {
      return element;
    } 
  }
  return undefined; 

  //return the number that passes the test(returns true) or undefined if
  //none pass the test.
}
var f = function(element, index, arr) {
  //your code here
  return element > 10;
}

// f -> function itself
// f(...) -> call the function with input to get value
console.log(findFromScratch (array, f));


console.log(findFromScratch([null, false, undefined], function () {return true;}));

// var g = function(element, index, arr) { // always return true or false
//   //your code here
//   console.log(element, index + 1);
//   return element > index + 1;
// }
// console.log(findFromScratch (array, g));

// console.log(findFromScratch(['a', 'bcd', 'jk'], function (element, index, arr) {
//   return element.length > 2;
// }))

function findIndexFromScratch(arr, fn) {
  //your code here
  for (var index = 0 ; index < arr.length ; index++) {
    let element = arr[index];
    // console.log("Element is : ", element, "Index is ", index);
    var passedFunctionResult = fn(element, index, arr);
    if (passedFunctionResult) {
      return index;
    } 
  }
  return -1;
}

var result = findIndexFromScratch (array, function(element, index, arr){
  //your code here
    //your code here
  //use some kind of loop to go through the array and the 
  //first element that causes passed in function to return true.
  //once that happens stop and return the current index of the array.
//that we are on.

  //return the array index that passes the test(returns true) or undefined if
  //none pass the test.
  return element > 10;
})

console.log(result);

//expected output: 1

function findIndexFromScratch(arr, fn) {
  //your code here
  for (var index = 0 ; index < arr.length ; index++) {
    let element = arr[index];
    // console.log("Element is : ", element, "Index is ", index);
    var passedFunctionResult = fn(element, index, arr);
    if (passedFunctionResult) {
      return index;
    } 
  }
  return -1;
}
