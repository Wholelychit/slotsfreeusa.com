/* ====================================================================
   SLOTSFREEUSA CLASSIC VEGAS 3-REEL SLOT
   Virtual credits only. No deposits. No payouts. No real-money gambling.
   ==================================================================== */

const slotSymbols = ["🍒", "🍋", "🔔", "BAR", "7️⃣"];
const payoutTable = {
  "🍒": 40,
  "🍋": 30,
  "🔔": 80,
  "BAR": 120,
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

function updateStats() {
  creditsEl.textContent = credits.toString();
  spinsEl.textContent = spins.toString();
  lastWinEl.textContent = lastWin.toString();
}

function pickSymbol() {
  return slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
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

function setReelText(reel, symbol) {
  reel.textContent = symbol;
  if (symbol === "BAR") {
    reel.classList.add("bar-symbol");
  } else {
    reel.classList.remove("bar-symbol");
  }
}

function spin() {
  const bet = 10;

  if (credits < bet) {
    messageEl.textContent = "Out of virtual credits. Press Reset to play again for free.";
    return;
  }

  credits -= bet;
  spins += 1;
  spinButton.disabled = true;
  messageEl.textContent = "Reels spinning...";
  reels.forEach((reel) => reel.classList.add("spinning"));

  let animationCount = 0;
  const animation = setInterval(() => {
    reels.forEach((reel) => {
      setReelText(reel, pickSymbol());
    });

    animationCount += 1;
    if (animationCount >= 16) {
      clearInterval(animation);
      const results = reels.map(() => pickSymbol());

      reels.forEach((reel, index) => {
        reel.classList.remove("spinning");
        setReelText(reel, results[index]);
      });

      lastWin = scoreSpin(results);
      credits += lastWin;

      if (lastWin >= 100) {
        messageEl.textContent = `Big free-play hit: ${lastWin} virtual credits.`;
      } else if (lastWin > 0) {
        messageEl.textContent = `Free-play win: ${lastWin} virtual credits.`;
      } else {
        messageEl.textContent = "No match this spin. Try again for fun.";
      }

      updateStats();
      spinButton.disabled = false;
    }
  }, 65);
}

function resetGame() {
  credits = 1000;
  spins = 0;
  lastWin = 0;
  const startingSymbols = ["7️⃣", "🍒", "🔔"];
  reels.forEach((reel, index) => {
    reel.classList.remove("spinning");
    setReelText(reel, startingSymbols[index]);
  });
  messageEl.textContent = "Virtual credits reset. No real money is used.";
  updateStats();
  spinButton.disabled = false;
}

spinButton.addEventListener("click", spin);
resetButton.addEventListener("click", resetGame);

resetGame();
