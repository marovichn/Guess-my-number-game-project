'use strict';
var ourNumber = Math.floor((Math.random() * 20) + 1);
var score = 20;
var highScore = 0;

document.querySelector(".check").addEventListener("click", function() {
    var guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").innerText = "no number :/";
    } else if (guess > ourNumber) {
        document.querySelector(".message").innerText = "Too high";
        score--;
    } else if (guess < ourNumber) {
        document.querySelector(".message").innerText = "Too low";
        score--;
    } else {
        document.querySelector(".message").innerText = "YOU GOT IT!!";
        document.querySelector("h1").innerHTML = "YOU WON!";
        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").innerHTML = guess;
        document.querySelector(".number").style.color = "green";
        if (score >= highScore) { highScore = score; }
    }
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".highscore").innerHTML = highScore;
    if (score <= 0) {
        document.querySelector(".message").innerText = "LOSE !!";
        document.querySelector("h1").innerHTML = "YOU LOST!!!";
        document.querySelector("body").style.backgroundColor = "red";
        document.querySelector(".number").style.color = "red";
        document.querySelector(".score").innerHTML = 0;
    }


})

document.querySelector(".again").addEventListener("click", function() {
    ourNumber = Math.floor(Math.random() * 20);
    document.querySelector(".message").innerText = "Start guessing...";
    document.querySelector("h1").innerHTML = "Guess My Number";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").innerHTML = "?";
    document.querySelector(".number").style.color = "#222";
    score = 20;
    document.querySelector(".score").innerHTML = score;
})