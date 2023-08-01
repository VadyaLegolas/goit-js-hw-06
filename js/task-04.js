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
  value: document.querySelector("#value"),
  buttonDec: document.querySelector('button[data-action="decrement"]'),
  buttonInc: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

refs.buttonDec.addEventListener("click", onButtonDecrementClick);

refs.buttonInc.addEventListener("click", onButtonIncrementClick);

function operationsOfValue(operation) {
  let val = Number(refs.value.textContent); 
  switch (operation) {
    case "+":
      val += 1;
      break;
    case "-":
      val -= 1;
      break;
  }
  return val;
}

function onButtonDecrementClick() {
  counterValue = operationsOfValue('-')
  return (refs.value.textContent = counterValue);
}
function onButtonIncrementClick() {
  counterValue = operationsOfValue('+')
  return (refs.value.textContent = counterValue);
}
