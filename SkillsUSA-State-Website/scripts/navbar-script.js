const nav = document.getElementById("navigation");
const menuButton = document.querySelector("header button");

menuButton.addEventListener("click", () => {
  // toggles the data-visible and aria-expanded attributes when menu button clicked
  if (nav.getAttribute("data-visible") === "false") {
    nav.setAttribute("data-visible", "true");
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    nav.setAttribute("data-visible", "false")
    menuButton.setAttribute("aria-expanded", "false");
  }
})