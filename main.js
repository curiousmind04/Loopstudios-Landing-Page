const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const bodyOverlay = document.querySelector(".body-overlay");
const close = document.querySelectorAll(".close-icon");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  bodyOverlay.style.display = "block";
});

close.forEach((close) => {
  close.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    bodyOverlay.style.display = "none";
  });
});
