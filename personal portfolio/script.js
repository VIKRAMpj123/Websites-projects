let scrollbar = document.querySelector(".scroll-bar");
let menu = document.querySelector("#menu");
let navBar = document.querySelector(".navbar");

menu.addEventListener("click", ()=>{
    menu.classList.toggle("fa-times")
    navBar.classList.toggle("toggle")
})