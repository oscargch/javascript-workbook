array = [1, 2, 3, 4, 5];

console.log(array.reverse());

//

array = [1, 2, 3, 4, 5];

let array2 = array.concat(array);

console.log(array2);

let duplicate = function () {
  console.log(array2);
}

duplicate([1, 2, 3, 4, 5]);