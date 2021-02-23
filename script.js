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

// sticky navbar

const sectionProjects = document.querySelector("#project");
console.log(sectionProjects);
const initailCords = sectionProjects.getBoundingClientRect();
console.log(initailCords);
const navbar = document.querySelector("header");
console.log(navbar);

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initailCords.top) navbar.classList.add("sticky");
//   else navbar.classList.remove("sticky");
// });

// const obsCallback = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(sectionProjects);

const sectionHero = document.querySelector(".hero");

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
};

const heroObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

heroObserver.observe(sectionHero);
