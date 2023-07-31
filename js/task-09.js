// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const refs = {
  body: document.querySelector("body"),
  spanColor: document.querySelector(".color"),
  btnChangeColor: document.querySelector(".change-color"),
};

refs.btnChangeColor.addEventListener("click", onBtnChangeColorClick);

function onBtnChangeColorClick(e) {
  const color = getRandomHexColor();
  refs.spanColor.textContent = color;
  return (refs.body.style.backgroundColor = color);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
