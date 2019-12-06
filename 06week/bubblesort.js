//From the webworkbook.

// boolean isSorted = false;
// int lastUnsorted = array.length - 1;

// while (!isSorted) {
//   isSorted = true;
//   for (int i = 0; i < lastUnsorted; i++) {
//     if (array[i] > array[i + 1]) {
//       swap(array, i, i + 1);
//       isSorted = false;
//     }
//   }
// }

// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  // console.log('first')
console.log(array);
  array[i] = array[j];
// console.log('second');
  console.log(array);
  array[j] = temp;
  // console.log('third');
  console.log(array);
}

// be careful: this is a very basic implementation which is nice to understand the deep principle of bubble sort (going through all comparisons) but it can be greatly improved for performances
function bubbleSortBasic(array) {
  // This first for loop will go through the array.
  for(var i = 0; i < array.length; i++) {
    // This second for loop will compare the numbers and run the swap function if the number before j is bigger than j.
    for(var j = 1; j < array.length; j++) {
      if(array[j - 1] > array[j]) {
        swap(array, j - 1, j);
      }
    }
  }
  return array;
}

console.log(bubbleSortBasic(array.slice())); // Expected result => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// console.log(array.length - 1);

console.log(array.length - 0); // display the highest number which will be the last item in the array.

console.log(Math.max(...array)); // display the highest number in the array. 

// correct implementation: this is the usual implementation of the bubble sort algorithm. Some loops execution are avoided if not they are not needed
// function bubbleSort(array) {
//   var swapped;
//   do {
//     swapped = false;
//     for(var i = 0; i < array.length; i++) {
//       if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
//         swap(array, i, i + 1);
//         swapped = true;
//       }
//     }
//   } while(swapped);
//   return array;
// }

// console.log(bubbleSort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

//Emi's bubble sort: 

// const bubbleSort = arr => {
//   let swapped;
//   do {
//   swapped = false;
//   for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > arr[i + 1]) {
//   let tmp = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = tmp;
//   swapped = true;
//   }
//   }
//   } while (swapped);
//   return arr;
//   };
//   console.log(bubbleSort(array));
//   console.log(Math.max(...array));