let homeBtn = document.querySelector(".home_container");
let aboutBtn = document.querySelector(".about_container");
let workBtn = document.querySelector(".work_container");
let contactBtn = document.querySelector(".contact_container");
let menu = document.querySelector(".menu");

const hideMenuBtn = [];
hideMenuBtn.push(homeBtn, aboutBtn, workBtn, contactBtn);

function toggleClass() {
  menu.classList.toggle("togglecls");

  document.querySelector("main").onclick = function () {
    menu.classList.toggle("togglecls");
  };

  hideMenuBtn.forEach((btn) => {
    btn.onclick = function () {
      menu.classList.toggle("togglecls");
    };
  });
}
