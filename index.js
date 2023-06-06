


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
    alert("Not enough coins.");
    return false;
  }
}

function updateCoinCount() {
  const coinCountElement = document.getElementById("coinCount");
  coinCountElement.innerHTML = `&#x1F4B0 ${coins}`;
}


const symbols = ['💙', '🌹', '🌸', '🔥'];

const slotgameElement = document.getElementById("slotgame");


function randomSymbol() {
  const randomIndex = Math.floor(Math.random() * symbols.length);
  return symbols[randomIndex];
}

function playSlot() {
  const reel1 = randomSymbol();
  const reel2 = randomSymbol();
  const reel3 = randomSymbol();

  const result = `${reel1} | ${reel2} | ${reel3}`;

  slotgameElement.innerHTML = result;

  if (reel1 === reel2 && reel2 === reel3) {
    addCoins(20)
    slotgameElement.style.color = "green";
    slotgameElement.style.fontWeight = "bolder";
    slotgameElement.textContent += ' - Gewonnen!';
  } else {
    deductCoins(2);
    slotgameElement.style.color = "red";
    slotgameElement.style.fontWeight = "bold";
    slotgameElement.textContent += ' - Verloren!';
  }
}



document.addEventListener("keydown", function(event) {
  if (event.code === "Space" && event.repeat === false) {
    if (coins >= 2) {
    
      playSlot();
    } else {
      alert("Not enough coins. Minimum 10 coins required to play.");
    }
  }
});


  
  