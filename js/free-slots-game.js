/* ====================================================================
   SLOTSFREEUSA ORIGINAL FREE-PLAY SLOT GAME
   Virtual credits only. No deposits. No payouts. No real-money gambling.
   ==================================================================== */

const slotSymbols = ["🍒", "🍋", "🔔", "⭐", "💎", "7️⃣"];
const payoutTable = {
  "🍒": 20,
  "🍋": 25,
  "🔔": 40,
  "⭐": 60,
  "💎": 100,
  "7️⃣": 150
};

let credits = 1000;
let spins = 0;
let lastWin = 0;

const reels = Array.from(document.querySelectorAll(".reel"));
const creditsEl = document.getElementById("credits");
const spinsEl = document.getElementById("spins");
const lastWinEl = document.getElementById("lastWin");
const messageEl = document.getElementById("gameMessage");
const spinButton = document.getElementById("spinButton");
const resetButton = document.getElementById("resetButton");
const gameSelect = document.getElementById("gameSelect");
const gameTitle = document.getElementById("gameTitle");
const gameTheme = document.getElementById("gameTheme");

const games = {
  fruit: {
    title: "Classic Fruit Free Play",
    theme: "Simple fruit-machine style demo with virtual credits only.",
    symbols: ["🍒", "🍋", "🍉", "🍇", "🔔", "7️⃣"]
  },
  treasure: {
    title: "Treasure Spin Free Play",
    theme: "Bright treasure-style demo with gems, stars, and bonus-style symbols.",
    symbols: ["💰", "💎", "⭐", "👑", "🔔", "7️⃣"]
  },
  lucky: {
    title: "Lucky Lou Free Play",
    theme: "SlotsFreeUSA original demo. Spin for fun with no deposits or payouts.",
    symbols: ["🍀", "⭐", "💎", "🔔", "🍒", "7️⃣"]
  }
};

function updateStats() {
  creditsEl.textContent = credits.toString();
  spinsEl.textContent = spins.toString();
  lastWinEl.textContent = lastWin.toString();
}

function pickSymbol(symbolList) {
  return symbolList[Math.floor(Math.random() * symbolList.length)];
}

function scoreSpin(results) {
  const [a, b, c] = results;

  if (a === b && b === c) {
    return payoutTable[a] || 75;
  }

  if (a === b || b === c || a === c) {
    return 10;
  }

  return 0;
}

function spin() {
  const selectedGame = games[gameSelect.value] || games.fruit;
  const bet = 10;

  if (credits < bet) {
    messageEl.textContent = "Out of virtual credits. Reset to play again for free.";
    return;
  }

  credits -= bet;
  spins += 1;
  spinButton.disabled = true;
  messageEl.textContent = "Spinning...";

  let animationCount = 0;
  const animation = setInterval(() => {
    reels.forEach((reel) => {
      reel.textContent = pickSymbol(selectedGame.symbols);
    });

    animationCount += 1;
    if (animationCount >= 12) {
      clearInterval(animation);
      const results = reels.map(() => pickSymbol(selectedGame.symbols));
      reels.forEach((reel, index) => {
        reel.textContent = results[index];
      });

      lastWin = scoreSpin(results);
      credits += lastWin;

      if (lastWin > 0) {
        messageEl.textContent = `Free-play win: ${lastWin} virtual credits.`;
      } else {
        messageEl.textContent = "No match. Spin again for fun.";
      }

      updateStats();
      spinButton.disabled = false;
    }
  }, 70);
}

function resetGame() {
  credits = 1000;
  spins = 0;
  lastWin = 0;
  reels.forEach((reel) => {
    reel.textContent = "❔";
  });
  messageEl.textContent = "Virtual credits reset. No real money is used.";
  updateStats();
}

function switchGame() {
  const selectedGame = games[gameSelect.value] || games.fruit;
  gameTitle.textContent = selectedGame.title;
  gameTheme.textContent = selectedGame.theme;
  resetGame();
}

spinButton.addEventListener("click", spin);
resetButton.addEventListener("click", resetGame);
gameSelect.addEventListener("change", switchGame);

switchGame();
