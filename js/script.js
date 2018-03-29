

var Player = function(playerName, rollPoints, turnScore, turnTotal) {
  this.playerName = playerName;
  this.rollPoints = 0;
  this.turnScore = 0;
  this.turnTotal = 0;
}

Player.prototype.newRoll = function() {
  return this.rollPoints = Math.floor((Math.random() * 6) +1);
}

Player.prototype.addPoints = function() {
  if (this.rollPoints === 1) {
    this.turnScore = 0;
  } else {
    this.turnScore += this.rollPoints;
  }
  return this.turnScore;
}

Player.prototype.addTotal = function() {
  this.turnTotal += this.turnScore;
  this.turnScore = 0;
  return this.turnTotal;
}

Player.prototype.youWin = function() {
  if (this.turnTotal >= 100) {
    alert("you just won!")
  }
}

$(document).ready(function() {

  $("#player1").submit(function(event) {
    event.preventDefault();
    var playerName = $("#name1").val();
    var player1 = new Player(playerName, 0, 0, 0);
    $(".player1-name").text(playerName);
    $("#player1").hide();
    $("#player2").show();
    $("#player1Roll").click(function() {
      var player1RollPoints = player1.newRoll();
      $("#player1-roll").text(player1RollPoints);
      var player1CurrentScore = player1.addPoints();
      $("#player1-turnScore").text(player1CurrentScore);
    });
    $("#player1Hold").click(function() {
      var playerOneTotalScore = player1.addTotal();
      $("#player1-score").text(playerOneTotalScore);
      player1.youWin();
    });
  });

  $("#player2").submit(function(event) {
    event.preventDefault();
    var playerName = $("#name2").val();
    var player2 = new Player(playerName, 0, 0, 0);
    $(".player2-name").text(playerName);
    $("#player2").hide();
    $("#player2Roll").click(function() {
      var player2RollPoints = player2.newRoll();
      $("#player2-roll").text(player2RollPoints);
      var player2CurrentScore = player2.addPoints();
      $("#player2-turnScore").text(player2CurrentScore);
    });
    $("#player2Hold").click(function() {
      var playerTwoTotalScore = player2.addTotal();
      $("#player2-score").text(playerTwoTotalScore);
      player2.youWin();
    });
  });
});
