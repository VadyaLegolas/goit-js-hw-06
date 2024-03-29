// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  inputFontSizeControl: document.querySelector("#font-size-control"),
  textFontChange: document.querySelector("#text"),
};

refs.textFontChange.style.fontSize = refs.inputFontSizeControl.value + "px";

refs.inputFontSizeControl.addEventListener(
  "input",
  oninputFontSizeControlInput
);

function oninputFontSizeControlInput(e) {
  refs.textFontChange.style.fontSize = e.currentTarget.value + "px";
}
