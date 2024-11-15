// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }



const input = document.querySelector("#validation-input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const dataLength = Number.parseInt(input.dataset.length, 10);
  const inputValue = event.currentTarget.value.trim().length;

  console.log(typeof dataLength);
  console.log("currentLength", event.currentTarget.value.length);

  if (inputValue === dataLength) {
    input.classList.remove("validation-input.invalid");
    input.classList.add("validation-input.valid");
    console.log("yes");
  } else {
    input.classList.remove("validation-input.valid");
    input.classList.add("validation-input.invalid");
    console.log("not");
  }
}
