// COOKIES В БЛОКЕ COOKIES
// Переменные
const cookies = document.querySelector(".cookies");
const cookiesButton = document.querySelector(".cookies__button");

let coords = 0;
let interv = setInterval(cook, 50);

// Анимация
function cook() {
  if (coords == 500) {
    clearInterval(interv);
  } else {
    coords++;
    cookies.style.bottom = coords + "px";
  }
}
// Исчезновение при нажатии
const resetCookies = cookiesButton.addEventListener("click", () => {
  cookies.classList.remove("active");
});

// PHONE MOVEMENT В БЛОКЕ CONTACTS
// Переменные для анимации картинки
const phoneAnimation = document.querySelector(".contacts__image");
let pos = 0;
let int = setInterval(tel, 50);

// Переменные для анимации текста
const textAnimation = document.querySelector(".contacts__text");
let posit = 0;
let inter = setInterval(anim, 50);

// Анимация картинки
function tel() {
  if (pos == 350) {
    clearInterval(int);
    function phoneRotated() {
      phoneAnimation.style.transform = "rotate(0deg)";
    }
    setInterval(phoneRotated, 2000);
  } else {
    pos++;
    phoneAnimation.style.left = pos + "px";
  }
}
function noneText() {
  textAnimation.classList.add("disable");
}

// Анимация текста
function anim() {
  // 350
  if (posit == 310) {
    clearInterval(inter);
    noneText();
  } else {
    posit++;
    textAnimation.style.left = posit + "px";
  }
}

// VALIDATION В БЛОКЕ FEEDBACK
("use strict");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll(".req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }
  }

  function formAddError(input) {
    input.parentElement.classlist.add("error");
    input.classlist.add("error");
  }
  function formRemoveError(input) {
    input.parentElement.classlist.remove("error");
    input.classlist.remove("error");
  }
});