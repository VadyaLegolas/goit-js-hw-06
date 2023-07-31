// Завдання 10 (виконувати не обов'язково)
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  boxes: document.querySelector("#boxes"),
  input: document.querySelector("input"),
  btnCreate: document.querySelector("button[data-create]"),
  btnDestroy: document.querySelector("button[data-destroy]"),
};

refs.btnCreate.addEventListener("click", onBtnCreateClick);
refs.btnDestroy.addEventListener("click", destroyBoxes);
const startWidth = 30;
const startHeight = 30;

function onBtnCreateClick(e) {
  destroyBoxes();
  const divs = createBoxes(
    Number(e.currentTarget.parentNode.children[0].value)
  );

  return refs.boxes.insertAdjacentHTML("beforeend", divs);
}

function createBoxes(amount) {
  const divsArray = [];
  for (let i = 0; i < amount; i += 1) {
    const divEl = `<div style="width: ${startWidth + i * 10}px; height: ${
      startHeight + i * 10
    }px; background-color: ${getRandomHexColor()};"></div>`;
    divsArray.push(divEl);
  }
  return divsArray.join("");
}

function destroyBoxes() {
  refs.boxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
