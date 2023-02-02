const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const bodyOverlay = document.querySelector(".body-overlay");
const closeOption = document.querySelectorAll(".close-icon");
const hoverAnchorTag = document.querySelectorAll(".underline a");
const overlays = document.querySelectorAll(".overlay");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "block";
  bodyOverlay.style.display = "block";
});

closeOption.forEach((close) => {
  close.addEventListener("click", () => {
    mobileMenu.style.display = "none";
    bodyOverlay.style.display = "none";
  });
});

hoverAnchorTag.forEach((tag) => {
  tag.addEventListener("mouseover", () => {
    tag.parentNode.classList.add("underline-effect");
  });
});

hoverAnchorTag.forEach((tag) => {
  tag.addEventListener("mouseout", () => {
    tag.parentNode.classList.remove("underline-effect");
  });
});

overlays.forEach((overlay) => {
  overlay.addEventListener("mouseover", () => {
    overlay.classList.add("overlay-hover-effect");
    overlay.nextElementSibling.style.color = "hsl(0, 0%, 0%)";
  });
});

overlays.forEach((overlay) => {
  overlay.addEventListener("mouseout", () => {
    overlay.classList.remove("overlay-hover-effect");
    overlay.nextElementSibling.style.color = "hsl(0, 0%, 100%)";
  });
});
