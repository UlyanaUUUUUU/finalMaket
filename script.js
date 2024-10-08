var init = false;
var swiper;

function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper(".mySwiper", {
                direction: "horizontal",
                slidesPerView: "auto",
                centeredSlides: true,
                spaceBetween: 16,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}

swiperCard();
window.addEventListener("resize", swiperCard);


let slide = document.querySelectorAll('.swiper-slide');
let showMore = document.querySelector('.show');
let hide = document.querySelector('.hide');

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    for (let i = 0; i < slide.length; i++) {
        if (i > 5) {
            slide[i].classList.add('hidden');
            hide.classList.add('hidden');
            showMore.addEventListener('click', function () {
                slide[i].classList.remove('hidden');
                showMore.classList.add('hidden');
                hide.classList.remove('hidden');
            });
            hide.addEventListener('click', function () {
                slide[i].classList.add('hidden');
                hide.classList.add('hidden');
                showMore.classList.remove('hidden');
            });
        }
    }

}

if (window.innerWidth >= 1120) {
    for (let i = 0; i < slide.length; i++) {
        if (i > 7) {
            slide[i].classList.add('hidden');
            hide.classList.add('hidden');
            showMore.addEventListener('click', function () {
                slide[i].classList.remove('hidden');
                showMore.classList.add('hidden');
                hide.classList.remove('hidden');
            });
            hide.addEventListener('click', function () {
                slide[i].classList.add('hidden');
                hide.classList.add('hidden');
                showMore.classList.remove('hidden');
            });
        }
    }
}
