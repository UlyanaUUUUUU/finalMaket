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
        swiper.destroy();
        init = false;
    }
}

swiperCard();
window.addEventListener("resize", swiperCard);


let slide = document.querySelectorAll('.brands__item');
let button = document.querySelector('.readMore');
let showMoreIcon = document.querySelector('.readMore__icon');
let showMoreText = document.querySelector('.readMore__text');


if (window.innerWidth >= 768 && window.innerWidth < 1067) {
    for (let i = 0; i < slide.length; i++) {
        if (i > 5) {
            slide[i].classList.add('hidden')
        }
    }
}
if (window.innerWidth >= 1067) {
    for (let i = 0; i < slide.length; i++) {
        if (i > 7) {
            slide[i].classList.add('hidden')
        }
    }
}
button.addEventListener('click', function () {
        // Изменяем текст кнопки
        if (window.innerWidth >= 768 && window.innerWidth < 1067) {
            if (showMoreText.textContent === 'Скрыть') {
                showMoreText.textContent = 'Показать все';
                for (let i = 0; i < slide.length; i++) {
                    if (i > 5) {
                        slide[i].classList.add('hidden')
                    }
                    showMoreIcon.classList.remove('readMore_rotate')
                }
            } else {
                showMoreText.textContent = 'Скрыть';
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.remove('hidden')
                }
                showMoreIcon.classList.add('readMore_rotate')
            }
        }
        if (window.innerWidth >= 1067) {

            if (showMoreText.textContent === 'Скрыть') {
                showMoreText.textContent = 'Показать все';
                for (let i = 0; i < slide.length; i++) {
                    if (i > 7) {
                        slide[i].classList.add('hidden')
                    }
                    showMoreIcon.classList.remove('readMore_rotate')
                }
            } else {
                showMoreText.textContent = 'Скрыть';
                for (let i = 0; i < slide.length; i++) {
                    slide[i].classList.remove('hidden')
                }
                showMoreIcon.classList.add('readMore_rotate')
            }
        }
    }
)