function Players (score1, score2){
  this.score1 = score1,
  this.score2 = score2
}
var dice = 0
var turnScore = 0

Players.prototype.addScore1 = function(turnScore) {
  this.score1 += turnScore
}

Players.prototype.addScore2 = function(turnScore) {
 this.score2 += turnScore
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
  var players = new Players(0,0)
  $("#players").submit(function(event) {
    event.preventDefault ();
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
  $("#p1pass").click(function(){
    players.addScore1(turnScore);
    if (players.score1 >= 10){
      $(".game-area").hide();
      $(".winner").show();
      $("#winner-name").text($("#player1").val());
    }
    $("#p1pass").hide();
    $("#p2pass").show();
    $("#p1score").text(players.score1);
    dice = 0
    turnScore = 0
    $("#current-roll").text(dice);
    $("#turn-score").text(dice);
  })
  $("#p2pass").click(function(){
    players.addScore2(turnScore);
    if (players.score2 >= 10){
      $(".game-area").hide();
      $(".winner").show();
      $("#winner-name").text($("#player2").val());
    }
    $("#p2pass").hide();
    $("#p1pass").show();
    $("#p2score").text(players.score2);
    dice = 0
    turnScore = 0
    $("#current-roll").text(dice);
    $("#turn-score").text(dice);
  })

});
