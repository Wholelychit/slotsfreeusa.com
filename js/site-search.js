const searchPages = [
  {
    title: 'Play Free Slots',
    url: 'play-free-slots.html',
    summary: 'Try the Classic Vegas free slot demo with virtual credits only.',
    keywords: 'play free slot demo classic vegas virtual credits no deposits no payouts'
  },
  {
    title: 'Free Slots Guide',
    url: 'free-slots.html',
    summary: 'Learn basic slot types, free-play habits, no-download game options, and slot volatility basics.',
    keywords: 'free slots no download slot types fruit slots classic slots beginner volatility'
  },
  {
    title: 'No Download Slots',
    url: 'no-download-slots.html',
    summary: 'Learn how browser-based slots work and what to check before playing on outside sites.',
    keywords: 'no download slots browser slots instant play mobile slots free play no install'
  },
  {
    title: 'Slot Terms Explained',
    url: 'slot-terms-explained.html',
    summary: 'Learn reels, paylines, symbols, wilds, scatters, free spins, volatility, RTP, and bonus rules in plain English.',
    keywords: 'slot terms reels paylines symbols wilds scatters free spins bonus rounds playthrough glossary volatility rtp'
  },
  {
    title: 'Slot Volatility Explained',
    url: 'slot-volatility-explained.html',
    summary: 'Learn low, medium, and high slot volatility, why volatility does not predict the next spin, and how beginners can play more carefully.',
    keywords: 'slot volatility explained low volatility medium volatility high volatility rtp variance risk dry spell beginner slots'
  },
  {
    title: 'Free Spins Explained',
    url: 'free-spins-explained.html',
    summary: 'Understand free-spin offers, expiration dates, eligible games, playthrough rules, and location checks.',
    keywords: 'free spins explained free spin offers eligible games expiration playthrough rules location'
  },
  {
    title: 'Casino Bonus Terms Explained',
    url: 'casino-bonus-terms-explained.html',
    summary: 'Learn welcome bonuses, free spins, playthrough, rollover, expiration dates, eligible games, and location rules.',
    keywords: 'casino bonus terms explained welcome bonus playthrough rollover expiration eligible games location rules'
  },
  {
    title: 'Best Free Slots for Beginners',
    url: 'best-free-slots-for-beginners.html',
    summary: 'Start with simple 3-reel slots, fruit symbols, and free-play demos.',
    keywords: 'best free slots beginners classic 3 reel fruit slots simple guide'
  },
  {
    title: 'Bonuses Explained',
    url: 'bonuses.html',
    summary: 'Understand free spins, bonus terms, playthrough language, and offer limits.',
    keywords: 'bonuses free spins playthrough wagering terms casino offers social casino bonus gold coins sweeps coins'
  },
  {
    title: 'Social Casino Bonus Guide',
    url: 'social-casino-bonus-guide.html',
    summary: 'Learn social casino bonus terms, Gold Coins, Sweeps Coins, daily bonuses, free coins, playthrough rules, location limits, and safer checks.',
    keywords: 'social casino bonus guide social casino bonuses daily bonus free coins gold coins sweeps coins sweepstakes coins playthrough redemption location rules'
  },
  {
    title: 'Reviews Hub',
    url: 'reviews.html',
    summary: 'Review status labels, comparison criteria, and future partner review rules.',
    keywords: 'reviews casino social casino partner status approved pending paused removed checklist'
  },
  {
    title: 'Online Casino Review Checklist',
    url: 'online-casino-review-checklist.html',
    summary: 'Use a plain-English checklist before signing up anywhere: age rules, location rules, terms, bonus clarity, support, and safer-play tools.',
    keywords: 'online casino review checklist legal casino checklist social casino checklist age rules location rules bonus terms support safer play disclosure'
  },
  {
    title: 'Sweeps Coins vs Gold Coins',
    url: 'sweepstakes-coins-vs-gold-coins.html',
    summary: 'Learn the plain-English difference between Gold Coins, Sweeps Coins, fun-play credits, promotional rules, location limits, and safer checks.',
    keywords: 'sweeps coins gold coins sweepstakes coins social casino coins virtual credits promotional coins coin system redemption rules gold coin sweeps coin'
  },
  {
    title: 'How We Review',
    url: 'how-we-review.html',
    summary: 'See how SlotsFreeUSA reviews partners before any link goes live.',
    keywords: 'how we review standards affiliate disclosure partner checklist trust'
  },
  {
    title: 'What Are Social Casinos?',
    url: 'what-are-social-casinos.html',
    summary: 'Learn how virtual coins, credits, bonuses, and social casino systems usually work.',
    keywords: 'social casinos virtual coins credits sweepstakes systems beginner gold coins sweeps coins social casino bonus'
  },
  {
    title: 'Sweepstakes Casino Guide',
    url: 'sweepstakes-casino-guide.html',
    summary: 'Understand coin types, location rules, redemption terms, and safer checks.',
    keywords: 'sweepstakes casino guide coins redemption location rules promotional coins gold coins sweeps coins'
  },
  {
    title: 'Responsible Play',
    url: 'responsible-gaming.html',
    summary: 'Set limits, take breaks, and treat casino-style games as entertainment.',
    keywords: 'responsible play safer gaming limits breaks no income gambling help'
  },
  {
    title: 'Partner With SlotsFreeUSA',
    url: 'partner-with-us.html',
    summary: 'Affiliate, advertising, sponsorship, and partner review inquiry requirements.',
    keywords: 'partner affiliate advertising sponsorship CPA RevShare contact'
  },
  {
    title: 'Contact SlotsFreeUSA',
    url: 'contact.html',
    summary: 'Contact SlotsFreeUSA for feedback, corrections, affiliate inquiries, and advertising questions.',
    keywords: 'contact email slotsfreeusa@gmail.com partner inquiry feedback correction advertising'
  },
  {
    title: 'Affiliate Disclosure',
    url: 'affiliate-disclosure.html',
    summary: 'Read how SlotsFreeUSA may earn from future ads or partner links.',
    keywords: 'affiliate disclosure ads partner links commission sponsorship'
  },
  {
    title: 'Privacy Policy',
    url: 'privacy.html',
    summary: 'Privacy basics for SlotsFreeUSA visitors.',
    keywords: 'privacy data email tracking analytics'
  },
  {
    title: 'Terms',
    url: 'terms.html',
    summary: 'Basic website terms and important limits.',
    keywords: 'terms rules legal limits no gambling no payments'
  }
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const searchHeading = document.getElementById('searchHeading');

function normalizeText(value) {
  return value.toLowerCase().trim();
}

function getQuery() {
  const params = new URLSearchParams(window.location.search);
  return normalizeText(params.get('q') || '');
}

function resultCard(page) {
  const article = document.createElement('article');
  article.className = 'review-card';

  const title = document.createElement('h3');
  title.textContent = page.title;

  const summary = document.createElement('p');
  summary.textContent = page.summary;

  const link = document.createElement('a');
  link.className = 'text-link';
  link.href = page.url;
  link.textContent = 'Open page →';

  article.appendChild(title);
  article.appendChild(summary);
  article.appendChild(link);

  return article;
}

function renderResults() {
  if (!searchInput || !searchResults || !searchHeading) return;

  const query = getQuery();
  searchInput.value = query;

  const results = query
    ? searchPages.filter((page) => {
        const haystack = normalizeText(`${page.title} ${page.summary} ${page.keywords}`);
        return query.split(/\s+/).every((term) => haystack.includes(term));
      })
    : searchPages.slice(0, 12);

  searchResults.replaceChildren();

  if (query) {
    searchHeading.textContent = results.length
      ? `Search results for “${query}”`
      : `No results found for “${query}”`;
  } else {
    searchHeading.textContent = 'Browse popular pages';
  }

  if (!results.length) {
    const empty = document.createElement('article');
    empty.className = 'notice-box';
    const title = document.createElement('h3');
    title.textContent = 'Try a simpler search';
    const text = document.createElement('p');
    text.textContent = 'Try words like free slots, no download slots, free spins, slot terms, volatility, bonuses, social casino bonus, sweepstakes, gold coins, sweeps coins, reviews, checklist, contact, or responsible play.';
    empty.appendChild(title);
    empty.appendChild(text);
    searchResults.appendChild(empty);
    return;
  }

  results.forEach((page) => searchResults.appendChild(resultCard(page)));
}

renderResults();
