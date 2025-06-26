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
  if (parallax) {
    let offset = window.scrollY * 0.5;
    parallax.style.transform = `translateY(${offset}px)`;
  }
});

// Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let index = 0;

function updateCarousel() {
  const slideWidth = slides[0].getBoundingClientRect().width;
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);

// Hero content animation
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add('show');
    }, 100);
  }
});

burger.classList.toggle('toggle');
nav.classList.toggle('active');
