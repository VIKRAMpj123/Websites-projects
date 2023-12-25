let btn = document.querySelector(".fa-bars");
let link = document.querySelector(".link");

btn.onclick = () => {
    btn.classList.toggle("fa-times");
    link.classList.toggle("active");
}