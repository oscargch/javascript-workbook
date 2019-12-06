'use strict';

const assert = require('assert');

// function forEach(arr, callback) {
//   // Your code here
// }

// arr.map(function callback(currentValue[, index[, array]]) {

// function f(a, b) {
//   console.log(a, b)
// }
// f(1, 2)

/// 
// var a = 1
// var b = 2
// console.log(a, b)

// f(1, {name: "jim"})

///

// var a = 1;
// var b = {name: "jim"};
// console.log(a, b)

// f(1, function (n) {return n * n})

// var a = 1;
// var b = function (n) {return n * n};
// console.log(a, b);

// f(3, function (n) {return n + 1});

// var a = 3;
// var b = function (n) {return n + 1};
// console.log(a, b);

// function callMyFunction(callback, argument) {
//   console.log(callback(argument))
// }

// const first3numbers = [1, 2, 3];
// const squared_arr = map(first3numbers, function (num) {
//   return num * num;
// });
// console.log(squared_arr)

function map(arr, callback) {
  var resultingArray = [];
  // Your code here
  for (var index = 0 ; index < arr.length ; index++) {
    let element = arr[index];
    let resultingElement = callback(element);
    // 
    resultingArray.push(resultingElement)

    // resultingArray[index] = resultingElement;
    // resultingArray[index] = callback(arr[index]);

  }
  return resultingArray
}


function filter(arr, callback) {
  var resultingArray2 = [];
  // Your code here
  for (var index = 0 ; index < arr.length ; index++) {
    let element = arr[index];

    let testPassedOrFailed = callback(element) ; //testPassedOrFailed is true if element should be filtered in, otherwise it's false
    if (testPassedOrFailed === true) {
      resultingArray2.push(element);
    }
    /**
     * 1. Get if the test told us to filter in the element or filter out
     * 2. Add the element to resultingArray based on the test in #1
     */
    
  }
  return resultingArray2
}

// [1, 2 ,3 , 4, 5]
// through a loop.legnth
// sum item[0] + item[1] + item[2]
// remove item that was used in the sum from the array
// variable that is equal to 0 that will keep track of the sum
// output the result
// [15]

// [1, 2, 3]
// [3, 3]
// [6]

// 0...  n -1
// combines elements at index 0 and 1 into one element
// combines previous result with elmeent at index 2
// ...............                                3
function reduce(arr, callback) {
  // Your code here
  while(arr.length >= 2) {
    let first = arr.splice(0, 1)[0];// 1 5 3 -> 5 3
    let second = arr.splice(0, 1)[0];// 5 3 -> 3

    // logic : combine current array element with the previous accumulated result
    // after combination, this is now the "previous accumulated result" for the next iteration
    var combined = callback(first, second)
    arr.unshift(combined) // 6 3 
  }
  return arr
  
}

// function some(arr, callback) {
//   // Your code here
// }

// function every(arr, callback) {
//   // Your code here
// }

if (typeof describe === 'function') {

  // describe('#forEach()', () => {
  //   it('should call the callback the array.length number of times', () => {
  //     let count = 0;
  //     forEach([1, 2, 3], () => {
  //       count++;
  //     });
  //     assert.equal(count, 3);
  //   });


  // });

  

  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, function (num) {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });

  describe('#reduce()', () => {
    it('should return a total of all the numbers in an array', () => {
      const reduced = reduce([1, 2, 3], (accumulator, currentValue) => {
        return accumulator + currentValue;
      });
      assert.deepEqual(reduced, [6]);
    });
  });
 

  // describe('#some()', () => {
  //   let count = 0;
  //   const somed = some([1, 2, 3, 4], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return true if at least one item passes the predicate test', () => {
  //     assert.equal(somed, true);
  //   });
  //   it('should stop at the first item that passes the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  //   it('should return false if no items pass the predicate test', () => {
  //     const somed = some([1, 3, 5], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(somed, false);
  //   });
  // });

  // describe('#every()', () => {
  //   it('should return true if at all passes the predicate test', () => {
  //     const everied = every([2, 4, 6], (num) => {
  //       return num % 2 === 0;
  //     });
  //     assert.equal(everied, true);
  //   });
  //   let count = 0;
  //   const everied = every([2, 3, 4, 5], (num) => {
  //     count++;
  //     return num % 2 === 0;
  //   });
  //   it('should return false if any item fails the predicate test', () => {
  //     assert.equal(everied, false);
  //   });
  //   it('should stop at the first item that fails the predicate test', () => {
  //     assert.equal(count, 2);
  //   });
  // });

} else {

  console.log('Only run the tests on this one!')

}
