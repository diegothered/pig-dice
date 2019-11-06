function Players (score1, score2){
  this.score1 = 0,
  this.score2 = 0
}
var dice = 0

Players.prototype.addScore1 = function(dice) {
  if (dice === 1) {
    this.score1 = 0
  } else {
    this.score1 += dice
  }
}

Players.prototype.addScore2 = function(dice) {
  if (dice === 1) {
    this.score2 = 0
  } else {
    this.score2 += dice
  }
}


var roll = function(){
  dice = Math.floor(Math.random() * 6) +1;

}


$(document).ready(function(){
  var players = new Players(0, 0)
  roll()
  console.log(dice);
  players.addScore1(dice);
  console.log(players.score1);

});
