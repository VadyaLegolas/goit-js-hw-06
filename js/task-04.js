// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const refs = {
  spanValue: document.querySelector("#value"),
  buttonDec: document.querySelector('button[data-action="decrement"]'),
  buttonInc: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.buttonDec.addEventListener("click", onButtonDecrementClick);

refs.buttonInc.addEventListener("click", onButtonIncrementClick);

function onButtonDecrementClick() {
  counterValue -= 1;
  return (refs.spanValue.textContent = counterValue);
}
function onButtonIncrementClick() {
  counterValue += 1;
  return (refs.spanValue.textContent = counterValue);
}
