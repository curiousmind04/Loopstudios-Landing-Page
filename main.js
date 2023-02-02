const hamburger = document.querySelector(".hamburger-icon");
const mobileMenu = document.querySelector(".mobile-menu");
const bodyOverlay = document.querySelector(".body-overlay");
const closeOption = document.querySelectorAll(".close-icon");
const hoverAnchorTag = document.querySelectorAll(".underline a");

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
