const themeOrder = ["cyan","magenta","lime","amber"];
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved && themeOrder.includes(saved)) root.dataset.theme = saved;

document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const current = root.dataset.theme || themeOrder[0];
  const next = themeOrder[(themeOrder.indexOf(current)+1) % themeOrder.length];
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

// Rotating words
const rotator = document.querySelector(".rotator");
if (rotator) {
  const words = JSON.parse(rotator.dataset.words);
  let i = 0;
  setInterval(() => {
    i = (i+1) % words.length;
    rotator.style.opacity = 0;
    setTimeout(() => {
      rotator.textContent = words[i];
      rotator.style.opacity = 1;
    }, 260);
  }, 2600);
}

// Reveal observer
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("is-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Optional: lazy load a particle or WebGL effect
requestIdleCallback?.(() => import('./lazy-effects.js').catch(()=>{}));