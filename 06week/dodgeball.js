let arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
  constructor(person, canThrowBall = true, canDodgeBall = true, hasPaid = false, isHealthy = true, yearsExperience = 0) {
    this.person = person;
    this.yearsExperience = yearsExperience;
    this.isHealthy = isHealthy;
    this.hasPaid = hasPaid;
    this.canDodgeBall = canDodgeBall;
    this.canThrowBall = canThrowBall;
  }

  addToBlueTeam() {
    console.log(`ask to add ${this.person.id} to blue team`)
    blueTeam.push(this)
    listBlueTeam()
  }

  addToRedTeam() {
    console.log(`ask to add ${this.person.id} to red team`)
    redTeam.push(this)
    listRedTeam()
  }


  show() {
    listOfPlayers.push(this)
    listPlayers()
  }
}
class blueTeammate {
  constructor(){}
}
class redTeammate {
  constructor(){}
}
// "<html>" | "<new html>" -> trees, abstract syntax trees
// virtual DOM - javascritp data structures emulating the real DOM
// React, vue.js, angular.js

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  listElement.innerHTML = "" 
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}


const listPlayers = () => {
  const listElement = document.getElementById('players')
  listElement.innerHTML = ""
  listOfPlayers.map(player => {
    var person = player.person;
    const li = document.createElement("li")
    const blueButton = document.createElement("button")
    blueButton.innerHTML = "Add to blue team"
    blueButton.addEventListener('click', function() {player.addToBlueTeam()} )
    const redButton = document.createElement("button")
    redButton.innerHTML = "Add to red team"
    redButton.addEventListener('click', function() {player.addToRedTeam()} )
    li.appendChild(blueButton)
    li.appendChild(redButton)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}


const listBlueTeam = () => {
  const listElement = document.getElementById('blue')
  listElement.innerHTML = ""
  blueTeam.map(player => {
    var person = player.person;
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}


const listRedTeam = () => {
  const listElement = document.getElementById('red')
  listElement.innerHTML = ""
  redTeam.map(player => {
    var person = player.person;
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}


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

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
  var person = findFromScratch(arrOfPeople, (person) => person.id == id)
  console.log(person)
  var player = new Player(person)
  player.show()
  arrOfPeople = filter(arrOfPeople, (person) => id != person.id)
  listPeopleChoices()
}