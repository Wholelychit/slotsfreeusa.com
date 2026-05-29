/* ====================================================================
   SLOTSFREEUSA CLASSIC VEGAS 3-REEL SLOT
   Virtual credits only. No deposits. No payouts. No real-money gambling.
   ==================================================================== */

(function () {
  var slotSymbols = ['🍒', '🍋', '🔔', 'BAR', '7️⃣'];
  var payoutTable = {
    '🍒': 40,
    '🍋': 30,
    '🔔': 80,
    BAR: 120,
    '7️⃣': 150
  };

  var credits = 1000;
  var spins = 0;
  var lastWin = 0;
  var isSpinning = false;

  function els() {
    return {
      reels: Array.prototype.slice.call(document.querySelectorAll('.reel')),
      credits: document.getElementById('credits'),
      spins: document.getElementById('spins'),
      lastWin: document.getElementById('lastWin'),
      message: document.getElementById('gameMessage'),
      spinButton: document.getElementById('spinButton'),
      resetButton: document.getElementById('resetButton')
    };
  }

  function ready(e) {
    return e.reels.length === 3 && e.credits && e.spins && e.lastWin && e.message;
  }

  function pickSymbol() {
    return slotSymbols[Math.floor(Math.random() * slotSymbols.length)];
  }

  function scoreSpin(results) {
    if (results[0] === results[1] && results[1] === results[2]) {
      return payoutTable[results[0]] || 75;
    }

    if (results[0] === results[1] || results[1] === results[2] || results[0] === results[2]) {
      return 10;
    }

    return 0;
  }

  function setReelText(reel, symbol) {
    reel.textContent = symbol;
    if (symbol === 'BAR') {
      reel.classList.add('bar-symbol');
    } else {
      reel.classList.remove('bar-symbol');
    }
  }

  function updateStats(e) {
    if (!ready(e)) return;
    e.credits.textContent = String(credits);
    e.spins.textContent = String(spins);
    e.lastWin.textContent = String(lastWin);
  }

  function doSpin(event) {
    if (event && event.preventDefault) event.preventDefault();

    var e = els();
    if (!ready(e) || isSpinning) return false;

    var bet = 10;

    if (credits < bet) {
      e.message.textContent = 'Out of virtual credits. Press Reset to play again for free.';
      return false;
    }

    credits -= bet;
    spins += 1;
    isSpinning = true;

    if (e.spinButton) e.spinButton.disabled = true;
    e.message.textContent = 'Reels spinning...';

    e.reels.forEach(function (reel) {
      reel.classList.add('spinning');
    });

    var animationCount = 0;
    var animation = window.setInterval(function () {
      e.reels.forEach(function (reel) {
        setReelText(reel, pickSymbol());
      });

      animationCount += 1;

      if (animationCount >= 12) {
        window.clearInterval(animation);

        var results = [pickSymbol(), pickSymbol(), pickSymbol()];

        e.reels.forEach(function (reel, index) {
          reel.classList.remove('spinning');
          setReelText(reel, results[index]);
        });

        lastWin = scoreSpin(results);
        credits += lastWin;

        if (lastWin >= 100) {
          e.message.textContent = 'Big free-play hit: ' + lastWin + ' virtual credits.';
        } else if (lastWin > 0) {
          e.message.textContent = 'Free-play win: ' + lastWin + ' virtual credits.';
        } else {
          e.message.textContent = 'No match this spin. Try again for fun.';
        }

        updateStats(e);
        isSpinning = false;
        if (e.spinButton) e.spinButton.disabled = false;
      }
    }, 65);

    return false;
  }

  function doReset(event) {
    if (event && event.preventDefault) event.preventDefault();

    var e = els();
    if (!ready(e)) return false;

    credits = 1000;
    spins = 0;
    lastWin = 0;
    isSpinning = false;

    var startingSymbols = ['7️⃣', '🍒', '🔔'];

    e.reels.forEach(function (reel, index) {
      reel.classList.remove('spinning');
      setReelText(reel, startingSymbols[index]);
    });

    e.message.textContent = 'Virtual credits reset. No real money is used.';
    updateStats(e);
    if (e.spinButton) e.spinButton.disabled = false;

    return false;
  }

  function initSlotGame() {
    var e = els();
    if (!ready(e)) return;

    if (e.spinButton) {
      e.spinButton.onclick = doSpin;
      e.spinButton.disabled = false;
    }

    if (e.resetButton) {
      e.resetButton.onclick = doReset;
    }

    doReset();
  }

  document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'spinButton') {
      doSpin(event);
    }

    if (event.target && event.target.id === 'resetButton') {
      doReset(event);
    }
  });

  window.slotsFreeUSA = window.slotsFreeUSA || {};
  window.slotsFreeUSA.spin = doSpin;
  window.slotsFreeUSA.resetGame = doReset;
  window.slotsFreeUSA.initSlotGame = initSlotGame;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSlotGame);
  } else {
    initSlotGame();
  }
})();
