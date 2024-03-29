// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  nameInput: document.querySelector("#name-input"),
  nameOutput: document.querySelector("#name-output"),
};
const defaultNameOutput = refs.nameOutput.textContent;

refs.nameInput.addEventListener("input", onNameInputInput);

function onNameInputInput(e) {
  if (e.currentTarget.value != "") {
    return (refs.nameOutput.textContent = e.currentTarget.value);
  }
  return (refs.nameOutput.textContent = defaultNameOutput);
}
