const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');

if (menuToggle && siteNav) {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-controls', siteNav.id || 'siteNav');

  const closeMenu = () => {
    siteNav.classList.remove('show');
    menuToggle.setAttribute('aria-expanded', 'false');
  };

  const toggleMenu = () => {
    const isOpen = siteNav.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  };

  menuToggle.addEventListener('click', toggleMenu);

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });
}

function showLuckyLouTip(category) {
  const box = document.getElementById('lou-tip');

  if (!box || typeof luckyLouDialog === 'undefined' || !luckyLouDialog[category]) return;

  const tips = luckyLouDialog[category];
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  const louBox = document.createElement('div');
  louBox.className = 'lou-box';

  const icon = document.createElement('div');
  icon.className = 'lou-icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.textContent = '🎰';

  const content = document.createElement('div');
  const heading = document.createElement('h3');
  const text = document.createElement('p');

  heading.textContent = 'Lucky Lou Says';
  text.textContent = randomTip;

  content.appendChild(heading);
  content.appendChild(text);
  louBox.appendChild(icon);
  louBox.appendChild(content);
  box.replaceChildren(louBox);
}

document.addEventListener('DOMContentLoaded', () => {
  showLuckyLouTip('welcome');
});
