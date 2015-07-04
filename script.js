//Here I declared my player
var player = 1;
var playerXScore = 0;
var playerOScore = 0;

//This is what happens when you click a button.  After it is clicked once, the button becomes disabled, and the player changes to the other player by changing the player varible to 0.  When the player varible is 0 it is 'O' Turn, when it is 1 it is 'x' turn.  A winner is also declared if any of the arguments are true.
function clickBtn(btn) {
  if (player == 1) {
    document.getElementById(btn).value = "X";
    document.getElementById(btn).disabled = "disabled";
    player -= 1;
    winner();
    draw();
    display();
    scoreBoard();
  } else {
    document.getElementById(btn).value = "O";
    document.getElementById(btn).disabled = "disabled";
    player += 1;
    winner();
    draw();
    display();
    scoreBoard();
  }
}


//Create Computer Player - In Future
function ai() {


}



//Here is my winner function.  I listed all of the winning scenerios.  Also has the reset button at the end to reset the game once a winner is found.
function winner() {
  if (
    document.getElementById("btn1").value == "X" && document.getElementById("btn2").value == "X" && document.getElementById("btn3").value == "X" || document.getElementById("btn4").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn6").value == "X" || document.getElementById("btn7").value == "X" && document.getElementById("btn8").value == "X" && document.getElementById("btn9").value == "X" ||
    document.getElementById("btn1").value == "X" && document.getElementById("btn4").value == "X" && document.getElementById("btn7").value == "X" || document.getElementById("btn2").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn8").value == "X" || document.getElementById("btn3").value == "X" && document.getElementById("btn6").value == "X" && document.getElementById("btn9").value == "X" ||
    document.getElementById("btn1").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn9").value == "X" || document.getElementById("btn3").value == "X" && document.getElementById("btn5").value == "X" && document.getElementById("btn7").value == "X"
  ) {
    playerXScore += 1;
    scoreBoard();
    alert("The Winner is X!!!!");
    reset();
  } else if (
    document.getElementById("btn1").value == "O" && document.getElementById("btn2").value == "O" && document.getElementById("btn3").value == "O" || document.getElementById("btn4").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn6").value == "O" || document.getElementById("btn7").value == "O" && document.getElementById("btn8").value == "O" && document.getElementById("btn9").value == "O" ||
    document.getElementById("btn1").value == "O" && document.getElementById("btn4").value == "O" && document.getElementById("btn7").value == "O" || document.getElementById("btn2").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn8").value == "O" || document.getElementById("btn3").value == "O" && document.getElementById("btn6").value == "O" && document.getElementById("btn9").value == "O" ||
    document.getElementById("btn1").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn9").value == "O" || document.getElementById("btn3").value == "O" && document.getElementById("btn5").value == "O" && document.getElementById("btn7").value == "O"
  ) {
    playerOScore += 1;
    scoreBoard();
    alert("The Winner is O!!!!");
    reset();
  }
}
//This Resets the board
function reset() {
  document.getElementById("btn1").value = "";
  document.getElementById("btn2").value = "";
  document.getElementById("btn3").value = "";
  document.getElementById("btn4").value = "";
  document.getElementById("btn5").value = "";
  document.getElementById("btn6").value = "";
  document.getElementById("btn7").value = "";
  document.getElementById("btn8").value = "";
  document.getElementById("btn9").value = "";
  //enable buttons to be clicked again
  document.getElementById("btn1").disabled = "";
  document.getElementById("btn2").disabled = "";
  document.getElementById("btn3").disabled = "";
  document.getElementById("btn4").disabled = "";
  document.getElementById("btn5").disabled = "";
  document.getElementById("btn6").disabled = "";
  document.getElementById("btn7").disabled = "";
  document.getElementById("btn8").disabled = "";
  document.getElementById("btn9").disabled = "";
  display();
}
//This displays the players current turn.  .innerHTML writes to the HTML in HTML.  I use the player varible to toggle between the two options
function display() {
  if (player == 1) {
    document.getElementById("display").innerHTML = "<h3>It is player 'X' turn!</h3>";
  } else {
    document.getElementById("display").innerHTML = "<h3>It is player 'O' turn!</h3>";
  }
}

display();

function draw() {
  if (
    (document.getElementById("btn1").value == "X" || document.getElementById("btn1").value == "O") && (document.getElementById("btn2").value == "X" || document.getElementById("btn2").value == "O") && (document.getElementById("btn3").value == "X" || document.getElementById("btn3").value == "O") && (document.getElementById("btn4").value == "X" || document.getElementById("btn4").value == "O") && (document.getElementById("btn5").value == "X" || document.getElementById("btn5").value == "O") && (document.getElementById("btn6").value == "X" || document.getElementById("btn6").value == "O") && (document.getElementById("btn7").value == "X" || document.getElementById("btn7").value == "O") && (document.getElementById("btn8").value == "X" || document.getElementById("btn8").value == "O") && (document.getElementById("btn9").value == "X" || document.getElementById("btn9").value == "O"))
    alert("You had a Draw!! Get a better strategy!")
}



function scoreBoard() {
  document.getElementById("score1").innerHTML = "<h3>The 'X' Player has " + playerXScore + " wins.</h3>";
  document.getElementById("score2").innerHTML = "<h3>The 'O' Player has " + playerOScore + " wins.</h3>";
}

scoreBoard();


function resetScore() {
  playerOScore = 0;
  playerXScore = 0;
  document.getElementById("score1").innerHTML = "<h3>The 'X' Player has " + playerXScore + " wins.</h3>";
  document.getElementById("score2").innerHTML = "<h3>The 'O' Player has " + playerOScore + " wins.</h3>";
}
