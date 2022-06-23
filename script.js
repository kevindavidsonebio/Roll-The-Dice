var firstPlayer = prompt("What is the name of the first player?");
playerOneName = document.querySelectorAll("p")[0].innerHTML = firstPlayer;

var secondPlayer = prompt("What is the name of the second player?");
playerTwoName = document.querySelectorAll("p")[1].innerHTML = secondPlayer;

function rollDice() {
  //Dice 1
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number 1 - 6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage;// images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  //Dice 2
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = firstPlayer + " Wins this round!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h2").innerHTML = secondPlayer + " Wins this round!";
  } else {
    document.querySelector("h2").innerHTML = "Draw";
  }
}

