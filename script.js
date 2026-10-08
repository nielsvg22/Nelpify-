// Mobiel menu
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') {
    menu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Scroll-reveal
const targets = document.querySelectorAll('.card, .case, .plan, .quote, .steps li, .sec__head');
targets.forEach(el => el.classList.add('reveal'));
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: .12 });
  targets.forEach(el => io.observe(el));
} else {
  targets.forEach(el => el.classList.add('in'));
}

// Pakket kiezen vult het formulier voor
document.querySelectorAll('[data-plan]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('select[name=pakket]').value = btn.dataset.plan;
  });
});

// Sticky CTA verbergen bij contactsectie
const sticky = document.querySelector('.sticky-cta');
const contact = document.getElementById('contact');
if (sticky && 'IntersectionObserver' in window) {
  new IntersectionObserver(([en]) => {
    sticky.style.display = en.isIntersecting ? 'none' : '';
  }).observe(contact);
}

// Contactformulier
// Stel hier je eigen endpoint in (bijv. Formspree: https://formspree.io/f/xxxxxxx).
// Leeg laten = formulier opent de mail-app van de bezoeker (mailto-fallback).
const FORM_ENDPOINT = '';
const FORM_EMAIL = 'hallo@jouwdomein.nl';

const form = document.getElementById('contactForm');
const msg = form.querySelector('.form__msg');
form.addEventListener('submit', async e => {
  e.preventDefault();
  msg.className = 'form__msg';
  let ok = true;
  form.querySelectorAll('[required]').forEach(f => {
    const bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
    f.classList.toggle('invalid', bad);
    if (bad) ok = false;
  });
  if (!ok) { msg.textContent = 'Vul alle velden correct in.'; msg.classList.add('err'); return; }

  const data = Object.fromEntries(new FormData(form));
  if (FORM_ENDPOINT) {
    try {
      const r = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data)
      });
      if (!r.ok) throw new Error();
      form.reset();
      msg.textContent = 'Bedankt! Ik reageer binnen één werkdag.';
    } catch {
      msg.textContent = 'Versturen mislukt. Mail me gerust via ' + FORM_EMAIL;
      msg.classList.add('err');
    }
  } else {
    const body = `Naam: ${data.naam}\nE-mail: ${data.email}\nInteresse: ${data.pakket}\n\n${data.bericht}`;
    location.href = `mailto:${FORM_EMAIL}?subject=${encodeURIComponent('Aanvraag Shopify webshop')}&body=${encodeURIComponent(body)}`;
    msg.textContent = 'Je mailprogramma wordt geopend om de aanvraag te versturen.';
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
