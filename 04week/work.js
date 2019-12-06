// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in your database.

// 1. Use .map() to map over the arrayOfPersons and console.log() their information.
// 2. Use .filter() to filter the persons array and console.log only males in the array.
// 3. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

var persons = [
  {firstname : "Malcom", lastname: "Reynolds", gender: "male", DOB: "1990,Jan,2"},
  {firstname : "Kaylee", lastname: "Frye", gender: "female", DOB: "1989,Feb,1"},
  {firstname : "Jayne", lastname: "Cobb", gender: "female", DOB: "1987,Mar,1"}
];

// const males = persons.filter(person => person.gender === 'male');
// // const older = persons.filter(person.DOB.split(" ").splice)

// persons.map(function(key, index){
//   console.log(persons[index]);
// });

// console.log(males);
// console.log(persons[0].DOB.split(" ").splice(-1))

// Jan 1, 1990

var filterPeople = persons.filter(function(person) {
  var personDate = new Date(person.DOB.split());
  var checkDate = new Date(1990,0,1);
  console.log(checkDate);
  if (personDate < checkDate){
    return person;
  }

});

console.log(filterPeople);


//

import { isMainThread } from "worker_threads";

var text = "";
var i = 0;

do {
  text += "The number is " + i;
  i++;
  console.log(i);
}
while (i < 1000);

let person = new Object();

person.firstName = "Jane";
person.lastName = "Doe";
person.birthDate = "Jan 5, 1925";
person.gender = "female";

// console.log(Object.keys(person.birthDate));
// console.log(Object.values(person.birthDate).slice(-1).toString());
// console.log(person.birthDate);

// let lastNumberInYear = Object.values(person.birthDate).slice(-1).toString();

// console.log(lastNumberInYear);

// if (lastNumberInYear % 5 == 0) {
//   console.log(lastNumberInYear);
// } else {
//   console.log("Number is even.");
// }

// for (const prop in person) {
//   if (Object.values(person.birthDate).slice(-1).toString() % 5 == 0)
//   console.log(person.birthDate);
// }

for (const oddYear in person) {
  if (Object.values(person.birthDate).slice(-1).toString() % 5 == 0) {
  console.log(person.birthDate);
}
}

// console.log(`person.${prop} = ${person[prop]}`);

// const object = {a: 1, b: 2, c: 3};

// for (const property in object) {
  
//   console.log(`${property}: ${object[property]}`);
// }

// Create an arrayOfPersons that contains mulitiple objects. You can simply copy/paste the person object you made above multiple times. 
// Feel free to change the values to reflect multiple people you might have in your database.
// 1. Use .map() to map over the arrayOfPersons and console.log() their information.
// 2. Use .filter() to filter the persons array and console.log only males in the array.
// 3. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// var persons = [
//   {firstname : "Malcom", lastname: "Reynolds", gender: "male", DOB: "Jan 1, 1990"},
//   {firstname : "Kaylee", lastname: "Frye", gender: "female", DOB: "Feb 1, 1991"},
//   {firstname : "Jayne", lastname: "Cobb", gender: "female", DOB: "March 1, 1996"}
// ];

// const males = persons.filter(person => person.gender === 'male');

// console.log(males);
