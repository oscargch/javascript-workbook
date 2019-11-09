let cars = ['Ford', 'BMW', 'Jeep', 'Ferrari'];
let moreCars = ['Volkswagen', 'RangeRover', 'Jaguar', 'Honda']
let totalCars = cars.concat(moreCars);
let stringOfCars = totalCars.join(",");

console.log("Cars length:", cars.length);

console.log("Total Cars:", totalCars);

console.log("indexOf of moreCars: " + moreCars.indexOf('Honda'));
console.log("indexOf of totalCars: " + totalCars.indexOf('Honda'));

console.log("lastIndexOf of cars: " + cars.lastIndexOf('Ford'));
console.log("lastIndexOf of totalCars: " + totalCars.lastIndexOf('Ford'));

console.log("String of cars: " + stringOfCars);

// This part doesn't appear to work.
let splitTotalCarsArray = stringOfCars.split(",");

console.log("Split array of cars: ", splitTotalCarsArray);

let carsInReverse = totalCars.reverse();
console.log("Reverse array of cars", carsInReverse);

console.log("Sorted array: ",carsInReverse.sort());

// This one acts weird.
// alert("Prediction:", carsInReverse.indexOf('BMW'));

console.log(carsInReverse.length);

let removedCars = carsInReverse.slice(2,4);
console.log("Remove Ford and Honda using slice", removedCars);

// Use the splice method to remove the 2nd and 3rd items in the array 
// carsInReverse and add Ford and Honda in their place.

console.log("Remove 2nd and 3rd items: ", carsInReverse.splice(1,2,'Ford','Honda'));
console.log(carsInReverse)

carsInReverse.push('Ford', 'Honda');
console.log(carsInReverse);

let store = carsInReverse.pop();
carsInReverse.pop();
console.log(store);

let showShift = carsInReverse.shift();
console.log(showShift);

carsInReverse.unshift('Tesla');
console.log(carsInReverse);

let numbersArray = [23, 45, 0, 2];
numbersArray.forEach(function (item) {
  numbersArray.push(item + 2);
  // console.log(numbersArray);
  console.log(item + 2);
})
console.log(numbersArray);