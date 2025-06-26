// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Burger menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.textContent = nav.classList.contains('active') ? '✖' : '☰';
});

// Form submit
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Merci pour votre message !");
  this.reset();
});

// Dark Mode
const modeSwitch = document.getElementById("mode-switch");
modeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  modeSwitch.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Parallax
window.addEventListener("scroll", () => {
  const parallax = document.querySelector(".parallax-bg");
  let offset = window.scrollY * 0.5;
  parallax.style.transform = `translateY(${offset}px)`;
});

// Carousel
const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

nextBtn.addEventListener('click', () => {
  index = (index + 1) % track.children.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + track.children.length) % track.children.length;
  updateCarousel();
});

function updateCarousel() {
  const width = track.clientWidth;
  track.style.transform = `translateX(-${index * width}px)`;
}

window.addEventListener('resize', updateCarousel);

document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector('.hero-content');
  setTimeout(() => {
    heroContent.classList.add('show');
  }, 100);
});

