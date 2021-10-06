/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable import/named */
/* eslint-disable no-unused-vars */

/* app.js */

/*
  DO NOT FORGET
Edit random.js so getRandomInt(max)
will return a random number from
0 to the value of max (inclusively)

*/
import getRandomInt from './random';
import './style.css';

const farewell = document.querySelector('.farewell');
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
const placeholder = document.querySelector('.suit-placeholder');
const displaySuit = (selection) => {
  const suit = document.querySelector(`.${selection}`);
  suit.classList.add('visible');
  placeholder.style.display = 'none';
};
const removeSuit = () => {
  const allSuits = document.querySelectorAll('.suit');
  allSuits.forEach((suit) => {
    if (suit.classList.contains('visible')) {
      suit.classList.remove('visible');
    }
  });
  placeholder.style.display = 'inline-block';
};

while (confirm('Would you like to play the game?')) {
  const index = getRandomInt(0, 4);
  const selection = suits[index];
  const guess = prompt('Guess what suit this card is');
  displaySuit(selection);
  if (guess.toLowerCase() === selection) {
    alert(`You got it! The suit is ${selection}.`);
  } else {
    alert(`You lost. The suit is ${selection}.`);
  }
  removeSuit();
}

farewell.innerHTML = '<h1>Thanks for playing!<h1>';
