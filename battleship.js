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
  ships: [{location: [06, 16, 26], hits: ["", "", ""] },
          {location: [24, 34, 44], hits: ["", "", ""] },
          {location: [10, 11, 12], hits: ["", "", ""] }],
  fire: function(guess){
    for (var i = 0; i < this.numShips; i++) {
      var ships = this.ships[i];
      var location = this.location;
      var index = location.indexOf(guess);
        if (index >= 0) {
          ship.hits = "hit";
          return true;
        }
    }
    return false;
  }
};

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessege("Tap tap, is this thing on?");
