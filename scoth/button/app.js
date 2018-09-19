let menuButton = document.querySelector(".menu__button");
let menuWrap = document.querySelector(".menu-wrap");

menuButton.addEventListener("click", () => {
    menuWrap.classList.toggle("open");
});

let toggleMenu = () => {
    menuWrap.classList.toggle("open");
}
let toggleTimer = setInterval(()=>{
    toggleMenu();
}, 2000);