/*efecto de aparicion de items*/
AOS.init({
    duration: 500,
    easing: 'ease-in-out',
    once: false,
    mirror: false
});

document.querySelectorAll(".faq-question").forEach(button => {
  button.addEventListener("click", () => {
    const faqItem = button.parentElement;
    faqItem.classList.toggle("active");
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");
const dropdowns = document.querySelectorAll(".dropdown");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

// Submenús en móvil
dropdowns.forEach(drop => {
  drop.addEventListener("click", e => {
    e.stopPropagation();
    drop.classList.toggle("open");
  });
});