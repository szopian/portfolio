let mainMenu = document.querySelector(".nav__links");
console.log("mainMenu: ", mainMenu);
let closeMenu = document.querySelector(".close__menu");
console.log("closeMenu: ", closeMenu);
let openMenu = document.querySelector(".open__menu");
console.log("openMenu: ", openMenu);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0px";
}

function close() {
  mainMenu.style.top = "-100%";
}

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

particlesJS.load("particles-js", "particles.json", function () {
  console.log("particles loaded...");
});
