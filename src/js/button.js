//Открыть бургер меню при нажатии на меню

let btnBurger = document.querySelector('.dropdown')
let burgerContainer = document.querySelector(".burger");

btnBurger.addEventListener('click', function () {
  burgerContainer.classList.remove('burger_hidden');
})


//Закрыть бургер меню на крестик
let closeBurger = document.querySelector('.burger_close')

closeBurger.addEventListener('click', function () {
  burgerContainer.classList.add('burger_hidden');
})


//Закрыть бургер меню при нажатии на заблюренную зону
let burgerMenu = document.querySelector('.burger__container');
burgerContainer.addEventListener('click', function (e) {
  let withinBoundaries = e.composedPath().includes(burgerMenu);
  if (!withinBoundaries) {
    burgerContainer.classList.add('burger_hidden');
  }
})

//Закрыть фидбэк

let btnClose = document.querySelectorAll('.button_close')
let feedbackContainer = document.querySelector('.feedback');

btnClose[0].addEventListener('click', function () {
  feedbackContainer.classList.add('feedback_hidden');
})

//Закрыть фидбэк  при нажатии на заблюренную зону
let feedback = document.querySelector('.feedback__container');
feedbackContainer.addEventListener('click', function (e) {
  let withinBoundaries = e.composedPath().includes(feedback);
  if (!withinBoundaries) {
    feedbackContainer.classList.add('feedback_hidden');
  }
})

//Открыть фидбэк
let btnChat = document.querySelectorAll('.button__chat')

btnChat[1].addEventListener('click', function () {
  feedbackContainer.classList.remove('feedback_hidden');
})

btnChat[0].addEventListener('click', function () {
  feedbackContainer.classList.remove('feedback_hidden');
  if (window.innerWidth < 1366) {
    burgerContainer.classList.add('burger_hidden');
  }
})


//Закрыть call

let call__container = document.querySelector('.call');

btnClose[1].addEventListener('click', function () {
  call__container.classList.add('call_hidden');
})

//Закрыть call при нажатии на заблюренную зону
let call = document.querySelector('.call__container');
call__container.addEventListener('click', function (e) {
  let withinBoundaries = e.composedPath().includes(call);
  if (!withinBoundaries) {
    call__container.classList.add('call_hidden');
  }
})

//Открыть call
let btnCall = document.querySelectorAll('.button_call')

btnCall[1].addEventListener('click', function () {
  call__container.classList.remove('call_hidden');
})

btnCall[0].addEventListener('click', function () {
  call__container.classList.remove('call_hidden');
  if (window.innerWidth < 1366) {
    burgerContainer.classList.add('burger_hidden');
  }
})
