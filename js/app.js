const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('show');
  });
}

function showLuckyLouTip(category) {
  const box = document.getElementById('lou-tip');

  if (!box || typeof luckyLouDialog === 'undefined' || !luckyLouDialog[category]) return;

  const tips = luckyLouDialog[category];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  box.innerHTML = `
    <div class="lou-box">
      <div class="lou-icon" aria-hidden="true">🎰</div>

      <div>
        <h3>Lucky Lou Says</h3>
        <p>${randomTip}</p>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  showLuckyLouTip('welcome');
});
