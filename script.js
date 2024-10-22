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


//Раскрытие списка при нажатии на "показать всё"
let btn = document.querySelectorAll(".readMore");
let container = document.querySelectorAll(".list");
let isAgain = false;
let btnIcon = document.querySelectorAll(".readMore__icon");
let btnText = document.querySelectorAll(".readMore__text");

if (window.innerWidth >= 768) {
    for (let i = 1; i < btn.length; i++) {
        btn[i].addEventListener('click', function () {
                if (!isAgain) {
                    container[i - 1].style.height = 'auto';
                    btnIcon[i].classList.add('readMore_rotate');
                    btnText[i].textContent = 'Скрыть';
                    isAgain = true;
                } else {
                    container[i - 1].removeAttribute("style")
                    btnIcon[i].classList.remove('readMore_rotate');
                    btnText[i].textContent = 'Показать все';
                    isAgain = false;
                }
            }
        )
    }
}


//Открыть бургер меню при нажатии на меню
let btnBurger = document.querySelector('.dropdown')
let burgerContainer = document.querySelector(".burger__container");

btnBurger.addEventListener('click', function () {
    burgerContainer.classList.remove('burger__container_hidden');
})


//Закрыть бургер меню на крестик
let closeBurger = document.querySelector('.close__burger')

closeBurger.addEventListener('click', function () {
    burgerContainer.classList.add('burger__container_hidden');
})


//Закрыть бургер меню при нажатии на заблюренную зону
let burgerMenu = document.querySelector('.burger');
burgerContainer.addEventListener('click', function (e) {
    let withinBoundaries = e.composedPath().includes(burgerMenu);
    if (!withinBoundaries) {
        burgerContainer.classList.add('burger__container_hidden');
    }
})

//Закрыть фидбэк

let btnClose = document.querySelectorAll('.button_close')
let feedbackContainer = document.querySelector('.feedback__container');

btnClose[0].addEventListener('click', function () {
    feedbackContainer.classList.add('feedback__container_hidden');
})

//Закрыть фидбэк  при нажатии на заблюренную зону
let feedback = document.querySelector('.feedback');
feedbackContainer.addEventListener('click', function (e) {
    let withinBoundaries = e.composedPath().includes(feedback);
    if (!withinBoundaries) {
        feedbackContainer.classList.add('feedback__container_hidden');
    }
})

//Открыть фидбэк
let btnChat = document.querySelectorAll('.button__chat')

    btnChat[1].addEventListener('click', function () {
        feedbackContainer.classList.remove('feedback__container_hidden');
    })

btnChat[0].addEventListener('click', function () {
    feedbackContainer.classList.remove('feedback__container_hidden');
    if (window.innerWidth < 1366) {
        burgerContainer.classList.add('burger__container_hidden');
    }
})


//Закрыть call

// let btnClose = document.querySelector('.button_close')
let call__container = document.querySelector('.call__container');

btnClose[1].addEventListener('click', function () {
    call__container.classList.add('call__container_hidden');
})

//Закрыть call при нажатии на заблюренную зону
let call = document.querySelector('.call');
call__container.addEventListener('click', function (e) {
    let withinBoundaries = e.composedPath().includes(call);
    if (!withinBoundaries) {
        call__container.classList.add('call__container_hidden');
    }
})

//Открыть call
let btnCall = document.querySelectorAll('.button_call')

btnCall[1].addEventListener('click', function () {
    call__container.classList.remove('call__container_hidden');
})

btnCall[0].addEventListener('click', function () {
    call__container.classList.remove('call__container_hidden');
    if (window.innerWidth < 1366) {
        burgerContainer.classList.add('burger__container_hidden');
    }
})