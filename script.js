// ─── Image injection ───
// Background image set inline in HTML

// ─── Nav ───
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
  animateProgressBars();
}, {passive:true});

// ─── Hamburger ───
function toggleMenu(){
  const m = document.getElementById('navMenu');
  m.classList.toggle('open');
}

// ─── Apt tabs ───
function showApt(idx){
  document.querySelectorAll('.apt-tab').forEach((t,i) => t.classList.toggle('active', i===idx));
  document.querySelectorAll('.apt-panel').forEach((p,i) => p.classList.toggle('active', i===idx));
}

// ─── Lightbox ───
function openLightbox(src){
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key==='Escape') closeLightbox(); });

// ─── Form ───
function handleSubmit(btn){
  btn.textContent = '✓ Mensaje enviado — te contactamos pronto';
  btn.style.background = '#4a7a42';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Solicitar información →';
    btn.style.background = '';
    btn.disabled = false;
  }, 4000);
}

// ─── Reveal on scroll ───
const revealEls = document.querySelectorAll('.reveal');
function checkReveal(){
  revealEls.forEach(el => {
    if(el.getBoundingClientRect().top < window.innerHeight * 0.89)
      el.classList.add('visible');
  });
}
window.addEventListener('scroll', checkReveal, {passive:true});
window.addEventListener('load', () => {
  document.getElementById('heroBg').classList.add('ready');
  checkReveal();
});
checkReveal();

// ─── Progress bars ───
let progressDone = false;
function animateProgressBars(){
  if(progressDone) return;
  const obraSection = document.getElementById('obra');
  if(!obraSection) return;
  const rect = obraSection.getBoundingClientRect();
  if(rect.top < window.innerHeight * 0.8){
    document.querySelectorAll('.progress-fill').forEach(el => el.classList.add('animated'));
    progressDone = true;
  }
}