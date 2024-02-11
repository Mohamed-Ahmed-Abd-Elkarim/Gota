let toggle = document.querySelector(".toggle-menu");
let nav = document.querySelector(".nav");
let close = document.querySelector(".close");
let header = document.querySelector(".header"); 
let allLis = document.querySelectorAll(".filter li a");
let boxes = document.querySelectorAll(".holder .box");
let mainImage = document.getElementById("main-img");
let love = document.querySelector(".love");
let share = document.querySelector(".share");
let social = document.querySelector(".sociall");
let minus = document.querySelector(".minus");
let num = document.querySelector(".num");
let plus = document.querySelector(".plus");
let a = 1;
let loader = document.querySelector(".preloader");

toggle.onclick = function () {
    nav.classList.add("active");
};
close.onclick = function () {
    nav.classList.remove("active");
};
window.onscroll = function () {
    nav.classList.remove("active");
};
allLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", mangeBoxes);
});
function removeActive () {
    allLis.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
};
function mangeBoxes () {
    boxes.forEach((box) => {
        box.style.opacity = "0";
        box.style.visibility = "hidden";
        box.style.display = "none";
    });
    document.querySelectorAll(this.dataset.work).forEach((el) => {
        el.style.opacity = "1";
        el.style.visibility = "visible";
        el.style.display = "block";
    });
};
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 200);
});
function change(img) {
    mainImage.src = img;
};
window.addEventListener("load", () => {
    loader.classList.add("hidden");
});