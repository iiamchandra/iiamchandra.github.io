const enterButton = document.getElementById('enterSite');
const siteContent = document.getElementById('siteContent');
const intro = document.getElementById('intro');
enterButton.addEventListener('click', () => {
  siteContent.classList.add('revealed');
  intro.style.minHeight = 'auto';
  intro.style.paddingBottom = '80px';
  intro.style.paddingTop = '125px';
  intro.querySelector('h1').style.fontSize = 'clamp(42px, 7vw, 76px)';
  intro.querySelector('.intro-copy').textContent = 'Thanks for stopping by. Take a look around.';
  enterButton.innerHTML = 'You’re in <span>✓</span>';
  enterButton.disabled = true;
  setTimeout(() => document.getElementById('about').scrollIntoView({behavior:'smooth'}), 450);
});
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('.nav-links a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
