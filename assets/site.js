// Меню на телефоне
const burger = document.querySelector('.burger');
const toggleMenu = open => {
  document.body.classList.toggle('menu-open', open);
  burger.setAttribute('aria-expanded', open);
};
burger.onclick = () => toggleMenu(!document.body.classList.contains('menu-open'));
document.querySelector('.menu').onclick = e => { if (e.target.closest('a')) toggleMenu(false); };

// При прокрутке: кнопка «наверх» (на всех страницах), тахометр и появление карточек услуг (на главной).
// Тахометру и карточкам скрипт передаёт в CSS число от 0 до 1: --p для стрелки, --r для каждой карточки.
const toTop = document.querySelector('.to-top');
const gauge = document.querySelector('.gauge');
const cards = document.querySelectorAll('.reveal');
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const wide = matchMedia('(min-width: 960px)');
const clamp = x => Math.min(1, Math.max(0, x)).toFixed(3);
let queued = false;
function onScroll() {
  queued = false;
  const vh = innerHeight;
  toTop.classList.toggle('show', scrollY > vh);
  if (gauge) {
    let p;
    if (wide.matches) { // на компьютере тахометр прилипает: стрелка идёт, пока листается весь блок услуг
      const r = gauge.closest('section').getBoundingClientRect();
      p = (vh * 0.6 - r.top) / (vh * 0.6 + (r.height - vh) * 0.9);
    } else {            // на телефоне: пока сам тахометр проезжает по экрану
      const r = gauge.getBoundingClientRect();
      p = ((vh - r.top) / (vh + r.height) - 0.15) / 0.5;
    }
    gauge.style.setProperty('--p', clamp(p));
  }
  if (!calm) cards.forEach(c => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--r', clamp((vh - r.top) / (r.height * 0.85)));
  });
}
addEventListener('scroll', () => { if (!queued) { queued = true; requestAnimationFrame(onScroll); } }, { passive: true });
addEventListener('resize', onScroll);
onScroll();

// Карусель отзывов (только на главной): стрелки показываются, только если отзывы не помещаются целиком
const track = document.querySelector('.carousel');
if (track) {
  const nav = document.querySelector('.car-nav');
  const fit = () => { nav.hidden = track.scrollWidth <= track.clientWidth + 1; };
  addEventListener('resize', fit);
  fit();
  nav.querySelectorAll('[data-dir]').forEach(btn => {
    btn.onclick = () => track.scrollBy({ left: btn.dataset.dir * track.firstElementChild.offsetWidth, behavior: 'smooth' });
  });
}
