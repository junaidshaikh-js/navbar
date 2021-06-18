// get menu button and nav-links
let menuBtn = document.querySelector("[class='bars']");

let navLinks = document.querySelector(".nav-links");

// show menu funtion
function showMenu() {
  navLinks.classList.toggle("show");
}

menuBtn.addEventListener("click", showMenu);
