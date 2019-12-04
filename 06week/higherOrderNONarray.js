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

function reduce(arr, callback) {
  // Your code here
  var accumulator = arr[0];
  for (var index = 1 ; index < arr.length ; index++) {
    let element = arr[index];
    // logic : combine current array element with the previous accumulated result
    // after combination, this is now the "previous accumulated result" for the next iteration
    accumulator = callback(accumulator, element)
  }
  return accumulator
}