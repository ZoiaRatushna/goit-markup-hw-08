let menuBtn = document.querySelector(".menu__btn");

let menu = document.querySelector(".menu");

let mainBlock = document.querySelector(".mainBlock");
let footerBlock = document.querySelector(".footer");
let headerBlock = document.querySelector(".headerBlock");

menuBtn.addEventListener("click", function (){
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");

    mainBlock.classList.toggle("globalHide");
    footerBlock.classList.toggle("globalHide");
    headerBlock.classList.toggle("globalHide");
})