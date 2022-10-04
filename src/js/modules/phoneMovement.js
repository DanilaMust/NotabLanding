export function phoneMovement() {

  window.scroll(function() {
    let height = window.scrollTop(); 
    console.log(height);             // Текущая позиция  скрола
    document.querySelector(".contacts__text").style.opacity = ""// Так как нужно указывать прозрачность вроде .50 и т.д., то делим на 100
  });

  const contactsMission = document.querySelector(".contacts__mission");
  // Переменные для анимации картинки
  const phoneAnimation = document.querySelector(".contacts__image");
  let pos = 0;
  let int = setInterval(tel, 50);

  // Переменные для анимации текста
  const textAnimation = document.querySelector(".contacts__text");
  let posit = 0;
  let inter = setInterval(anim, 50);
  let opacity = 100;

  // Анимация картинк
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
      phoneAnimation.style.position = "absolute";
      contactsMission.style.paddingBottom = '950px';
    }
  }
  function noneText() {
    textAnimation.classList.add("disable");
  }

  // Анимация текста
  function anim() {
    // 350
    if (posit == 200) {
      clearInterval(inter);
      noneText();
    } else {
      posit++;
      textAnimation.style.left = posit + "px";
    }
  }
}
