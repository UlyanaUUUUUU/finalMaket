var init = false;
var swiper;

function swiperCard() {
  if (window.innerWidth <= 768) {
    if (!init) {
      init = true;
      swiper = new Swiper(".mySwiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        spaceBetween: 16,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  } else if (init) {

    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);
