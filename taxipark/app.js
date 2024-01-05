// owlCarousel client

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})
// 
let btn = document.querySelector(".fa-bars");

btn.onclick = () => {
  btn.classList.toggle("fa-times");
}