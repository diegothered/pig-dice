function Players (score1, score2){
  this.score1 = 0,
  this.score2 = 0
}
var dice = 0
var turnScore = 0

Players.prototype.addScore1 = function(turnScore) {
  turnScore += this.score1
}

Players.prototype.addScore2 = function(turnScore) {
  turnScore += this.score2
}

var currentScore = function() {
  if (dice === 1) {
    turnScore = 0
  } else {
    turnScore = turnScore += dice
  }
}


var roll = function(){
  dice = Math.floor(Math.random() * 6) +1;

}


$(document).ready(function(){
  $("#players").submit(function(event) {
    event.preventDefault ();
    var players = new Players(0, 0)
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    $("#players").hide();
    $("#p2pass").hide();
    $(".game-area").show();
    $("#p1name").text(player1);
    $("#p2name").text(player2);
    $("#p1score").text(players.score1);
    $("#p2score").text(players.score2);
    $("#current-roll").text(dice);
    console.log(turnScore);
  })
  $("#roll-button").click(function() {
    roll()
    $("#current-roll").text(dice);
    currentScore();
    console.log(turnScore);
    $("#turn-score").text(turnScore);

  })

});
