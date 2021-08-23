/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector(".card").classList.add(randomSuitGenerator());
  document.querySelector(".number").innerHTML = randomNumberGenerator();

  function randomNumberGenerator() {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomNumber = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumber];
  }

  function randomSuitGenerator() {
    let suits = ["spade", "club", "diamond", "heart"];
    let randomSuits = Math.floor(Math.random() * suits.length);
    return suits[randomSuits];
  }
};
