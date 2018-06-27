var view = {
  displayMessege: function(msg) {
    var massegeArea = document.getElementById("massegeArea");
    massegeArea.innerHTML = msg;
  },
  displayHit: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "hit");
  },
  displayMiss: function(location) {
    var cell = document.getElementById(location);
    cell.setAttribute("class", "miss");
  }
  };
var model = {
  boardSize: 7,
  numShips: 3,
  shipLenght: 3,
  shipsSunk: 0,
  ships: [{locations: ["06", "16", "26"], hits: ["", "", ""] },
          {locations: ["24", "34", "44"], hits: ["", "", ""] },
          {locations: ["10", "11", "12"], hits: ["", "", ""] }],
  fire: function(guess){
    for (var i = 0; i < this.numShips; i++) {
      var ship = this.ships[i];
      var index = ship.locations.indexOf(guess);
      console.log(index);
        if (index >= 0) {
          ship.hits = "hit";
          view.displayHit(guess);
          view.displayMessege("HIT");
          if (this.isSunk(ship)) {
            view.displayMessege("You sunk my battleship");
            this.shipsSunk++;
          }
          return true;
        }
    }
    view.displayMiss(guess);
    view.displayMessege("You missed.");
    return false;
  },
  isSunk: function(ship) {

  }
};
var controller = {
  guesses: 0,
  processGuesses: function (guess) {
    // Kod metoda
  }
}

function parseGuesses(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess == null || guess.length !== 2) {
      alert("Opps, please enter a letter and number on the board.")
    } else {
      firstChar = guess.charAt(0);
      var row = alphabet.indexOf(firstChar);
      var column = guess.charAt(1);
      if (isNaN(row) || isNaN(column)) {
        alert("Oops, that's")
      }
    }
}

model.fire("53");

model.fire("06");
model.fire("16");
model.fire("26");

model.fire("34");
model.fire("24");
model.fire("44");

model.fire("12");
model.fire("11");
model.fire("10");

// view.displayMiss("00");
// view.displayHit("34");
// view.displayMiss("55");
// view.displayHit("12");
// view.displayMiss("25");
// view.displayHit("26");

view.displayMessege("Tap tap, is this thing on?");
