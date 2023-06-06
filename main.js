"use strict";

// import { esm } from "./index" ;

let coins = 100;

function addCoins(amount) {
  coins += amount;
  updateCoinCount();
}

function deductCoins(amount) {
  if (coins >= amount) {
    coins -= amount;
    updateCoinCount();
    return true;
  } else {
    return false;
  }
}

function updateCoinCount() {
  const coinCountElement = document.getElementById("coinCount");
  coinCountElement.innerHTML = `&#x1F4B0 ${coins}`;
}

const symbols = ["💙", "🌹", "🌸", "🔥", "🍀", "❼"];

const slotgameElement = document.getElementById("slotgame");

function randomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

//alte funktion
// function playSlot() {
//   const reel1 = randomSymbol();
//   const reel2 = randomSymbol();
//   const reel3 = randomSymbol();

//   const result = `${reel1} | ${reel2} | ${reel3}`;

//   slotgameElement.innerHTML = result;

//   if (reel1 === reel2 && reel2 === reel3) {
//     addCoins(0)
//     slotgameElement.style.color = "green";
//     slotgameElement.style.fontWeight = "bolder";
//     slotgameElement.textContent += ' - Gewonnen!';
//   } else {
//     deductCoins(2);
//     slotgameElement.style.color = "red";
//     slotgameElement.style.fontWeight = "bold";
//     slotgameElement.textContent += ' - Verloren!';
//   }
// }

function calculateWin(symbol1, symbol2, symbol3) {
  const wins = {
    "❼❼❼": 250,
    "💙💙💙": 50,
    "🌹🌹🌹": 20,
    "🌸🌸🌸": 20,
    "🔥🔥🔥": 100,
    "🍀🍀🍀": 20,
  };

  const winCombination = symbol1 + symbol2 + symbol3;

  if (wins.hasOwnProperty(winCombination)) {
    return wins[winCombination];
  } else {
    return 0;
  }
}

function playSlot() {
  const reel1 = randomSymbol();
  const reel2 = randomSymbol();
  const reel3 = randomSymbol();

  const result = `${reel1} | ${reel2} | ${reel3}`;

  slotgameElement.innerHTML = result;

  const winAmount = calculateWin(reel1, reel2, reel3);

  if (winAmount > 0) {
    addCoins(winAmount);
    slotgameElement.style.color = "green";
    slotgameElement.style.fontWeight = "bolder";
    slotgameElement.textContent += ` (+${winAmount}) `;
  } else {
    deductCoins(2);
    slotgameElement.style.color = "red";
    slotgameElement.style.fontWeight = "normal";
    slotgameElement.textContent += " (-2)";
  }
}

const titleElement = document.getElementById("title");

function animateTitleUp() {
  titleElement.style.top = "50px"; // Change the desired position for the title animation
}

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" && event.repeat === false) {
    if (coins >= 2) {
      playSlot();
      animateTitleUp();
    } else {
      alert("Not enough coins. Minimum 2 coins required to play.");
    }
  }
});
