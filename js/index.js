// get menu button and nav-links
let menuBtn = document.querySelector("[class='bars']");

let navLinks = document.querySelector(".nav-links");

// toggle between the 'show' class to show and hide the navbar
function showMenu() {
  navLinks.classList.toggle("show");
}

menuBtn.addEventListener("click", showMenu);

//  close navbar when clicked ouside of navbar on mobile
function closeMenu(e) {
  let isClickedOutside = menuBtn.contains(e.target);

  if (!isClickedOutside) {
    navLinks.classList.remove("show");
  }
}

document.addEventListener("click", closeMenu);
