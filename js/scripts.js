function Players (score1, score2){
  this.score1 = score1,
  this.score2 = score2
}

var isAiTurn = false
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



var players = new Players(0,0)

var aiPass = function() {
  console.log(turnScore);
  players.addScore2(turnScore);
  if (players.score2 >= 100){
    $(".game-area").hide();
    $(".winner").show();
    $("#winner-name").text($("#player2").val());
  }
  $("#p2turn").hide();
  $("#p1turn").show();
  $("#single-roll-button").show();
  $("#single-player-pass").show();
  $("#p2score").text(players.score2);
  dice = 0
  turnScore = 0
  $("#current-roll").text(dice);
  $("#turn-score").text(dice);
  isAiTurn = false
}

var singlePlayerPass = function(){
  players.addScore1(turnScore);
  if (players.score1 >= 100){
    $(".game-area").hide();
    $(".winner").show();
    $("#winner-name").text($("#player1").val());
  }
  $("#p1turn").hide();
  $("#p2turn").show();
  $("#single-player-pass").hide();
  $("#p1score").text(players.score1);
  dice = 0
  turnScore = 0
  $("#current-roll").text(dice);
  $("#turn-score").text(dice);
  isAiTurn = true
  while(isAiTurn === true){
    console.log(isAiTurn);
    roll();
    if (dice === 1){
      turnScore = 0
      aiPass();
    } else {
      currentScore();
      if (turnScore >= 20) {
        console.log("ai if")
        aiPass();

    }
    }
  }

}

var p1Pass = function () {
  players.addScore1(turnScore);
  if (players.score1 >= 100){
    $(".game-area").hide();
    $(".winner").show();
    $("#winner-name").text($("#player1").val());
  }
  $("#p1turn").hide();
  $("#p2turn").show();
  $("#p2-roll-button").show();
  $("#p1-roll-button").hide();
  $("#p1pass").hide();
  $("#p2pass").show();
  $("#p1score").text(players.score1);
  dice = 0
  turnScore = 0
  $("#current-roll").text(dice);
  $("#turn-score").text(dice);
}

var p2Pass = function (){
  players.addScore2(turnScore);
  if (players.score2 >= 100){
    $(".game-area").hide();
    $(".winner").show();
    $("#winner-name").text($("#player2").val());
  }
  $("#p2turn").hide();
  $("#p1turn").show();
  $("#p1-roll-button").show();
  $("#p2-roll-button").hide();
  $("#p2pass").hide();
  $("#p1pass").show();
  $("#p2score").text(players.score2);
  dice = 0
  turnScore = 0
  $("#current-roll").text(dice);
  $("#turn-score").text(dice);
}

$(document).ready(function(){
  $("#player1mode").click(function(){
    var player1 = "Player 1"
    var player2 = "Computer"
    $("#p1name").text(player1);
    $("#p2name").text(player2);
    $(".game-select").hide();
    $("#p1pass").hide();
    $("#p1score").text(players.score1);
    $("#p2score").text(players.score2);
    $("#single-player-pass").show();
    $("#p1-roll-button").hide();
    $("#p2pass").hide();
    $("#p2-roll-button").hide();
    $(".game-area").show()
  })
  $("#player2mode").click(function(){
    $(".game-select").hide();
    $("#single-player-pass").hide();
    $("#single-roll-button").hide();
    $("#players").show();
  })
  $("#players").submit(function(event) {
    event.preventDefault ();
    var player1 = $("#player1").val();
    var player2 = $("#player2").val();
    $("#players").hide();
    $("#p1pass").show();
    $("#p1-roll-button").show();
    $("#p2pass").hide();
    $("#p2-roll-button").hide();
    $(".game-area").show();
    $("#p1name").text(player1);
    $("#p2name").text(player2);
    $("#p1score").text(players.score1);
    $("#p2score").text(players.score2);
    $("#current-roll").text(dice);
    $("#p2turn").hide();
    $("#p2turn").text(player2);
    $("#p1turn").text(player1);

    console.log(turnScore);
  })
  $("#single-roll-button").click(function(){
    roll()
    if (dice === 1){
      turnScore = 0
      singlePlayerPass();
    }
    $("#current-roll").text(dice);
    currentScore();
    console.log(turnScore);
    $("#turn-score").text(turnScore);
  });
  $("#p1-roll-button").click(function() {
    roll()
    if (dice === 1){
      turnScore = 0
      p1Pass();
    }
    $("#current-roll").text(dice);
    currentScore();
    console.log(turnScore);
    $("#turn-score").text(turnScore);
  })
  $("#p2-roll-button").click(function() {
    roll()
    if (dice === 1){
      turnScore = 0
      p2Pass()
    }
    $("#current-roll").text(dice);
    currentScore();
    console.log(turnScore);
    $("#turn-score").text(turnScore);
  })
  $("#single-player-pass").click(function(){
    singlePlayerPass();
  })
  $("#p1pass").click(function(){
    p1Pass();
  })
  $("#p2pass").click(function(){
    p2Pass();
  })
  $("#reset").click(function(){
    $(".winner").hide();
    $("#players").show();
    dice = 0
    turnScore = 0
    players.score1 = 0
    players.score2 = 0
  })
});
