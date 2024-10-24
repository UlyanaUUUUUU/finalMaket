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
