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

let listOfPlayers = []
let blueTeam = []
let redTeam = []

class Player {
  constructor(person, canThrowBall = true, canDodgeBall = true, hasPaid = false, isHealthy = true, yearsExperience = 0) {
    this.person = person;
    this.yearsExperience = yearsExperience;
    this.isHealthy = isHealthy;
    this.hasPaid = hasPaid;
    this.canDodgeBall = canDodgeBall;
    this.canThrowBall = canThrowBall;
  }

  addToBlueTeamAndShow() {
    this.addToBlueTeam()
    listBlueTeam()
    listPlayers()
  }

  addToRedTeamAndShow() {
    this.addToRedTeam()
    listRedTeam()
    listPlayers()
  }

  addToBlueTeam() {
    // console.log(`ask to add ${this.person.id} to blue team`)
    listOfPlayers = filter(listOfPlayers, player => player != this)
    blueTeam.push(new BlueTeammate(this.person, this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, this.yearsExperience))
  }

  addToRedTeam() {
    // console.log(`ask to add ${this.person.id} to red team`)
    listOfPlayers = filter(listOfPlayers, player => player != this)
    redTeam.push(new RedTeammate(this.person, this.canThrowBall, this.canDodgeBall, this.hasPaid, this.isHealthy, this.yearsExperience))
  }

  show() {
    listPlayers()
  }
}

class BlueTeammate extends Player {
  constructor(person, canThrowBall = true, canDodgeBall = true, hasPaid = false, isHealthy = true, yearsExperience = 0) {
    super(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.color = "blue"
    this.mascot = " blue hawk"
  }
}

class RedTeammate extends Player {
  constructor(person, canThrowBall = true, canDodgeBall = true, hasPaid = false, isHealthy = true, yearsExperience = 0) {
    super(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience);
    this.color = "red"
    this.mascot = "red hawk"
  }
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
    button.addEventListener('click', function() {makeAndShowPlayer(person.id)} )
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
    blueButton.style.background = "blue"
    blueButton.addEventListener('click', function() {player.addToBlueTeamAndShow()} )
    const redButton = document.createElement("button")
    redButton.innerHTML = "Add to red team"
    redButton.style.background = "red"
    redButton.addEventListener('click', function() {player.addToRedTeamAndShow()} )
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
    li.style.border = "1px solid blue"
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
    li.style.border = "1px solid red"
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

const makeAndShowPlayer = (id) => {
  var player = makePlayer(id);
  player.show();
  listPeopleChoices();
  
}

const makePlayer = (id) => {
  // console.log(`li ${id} was clicked!`)
  var person = findFromScratch(arrOfPeople, (person) => person.id == id)
  // console.log(person)
  var player = new Player(person)
  arrOfPeople = filter(arrOfPeople, (person) => id != person.id)
  listOfPlayers.push(player)
  return player 
}
/**
 * Testable : put logic and other stuff separately, and then test logic
 * f -> computation testable []
 * g -> redaw ui
 */
// Tests
if (typeof describe === 'function') {
  const assert = require('assert');

  describe('Dodgeball Team Management', () => {
    it('should move people to players', () => {
      var randomPerson = arrOfPeople[0]
      assert(findFromScratch(arrOfPeople, person => person == randomPerson))
      makePlayer(randomPerson.id)
      assert(!findFromScratch(arrOfPeople, person => person == randomPerson))
      // console.log(listOfPlayers, randomPerson)
      assert(findFromScratch(listOfPlayers, player => player.person.id == randomPerson.id))
    })

    it('should move players to blue team', () => {
      makePlayer(arrOfPeople[0].id)
      var randomPlayer = listOfPlayers[0]
      assert(findFromScratch(listOfPlayers, player => player == randomPlayer))
      randomPlayer.addToBlueTeam()
      assert(!findFromScratch(listOfPlayers, player => player == randomPlayer))
      assert(findFromScratch(blueTeam, teamPlayer => teamPlayer.person.id == randomPlayer.person.id))

    })

    it('should move players to red team', () => {
      // console.log(arrOfPeople[0]);
      var randomPlayer = makePlayer(arrOfPeople[0].id)
      // console.log(randomPlayer);
      assert(findFromScratch(listOfPlayers, player => player == randomPlayer))
      randomPlayer.addToRedTeam()
      assert(!findFromScratch(listOfPlayers, player => player == randomPlayer))
      assert(findFromScratch(redTeam, teamPlayer => teamPlayer.person.id == randomPlayer.person.id))
    })
  
  })
}