const refs = {
  valueEl: document.querySelector("#value"),

  buttonDec: document.querySelector('button[data-action="decrement"]'),
  buttonInc: document.querySelector('button[data-action="increment"]'),
};

const operationDecrement = () =>
  (refs.valueEl.textContent = Number(refs.valueEl.textContent) - 1);
const operationIncrement = () =>
  (refs.valueEl.textContent = Number(refs.valueEl.textContent) + 1);

refs.buttonDec.addEventListener("click", operationDecrement);

refs.buttonInc.addEventListener("click", operationIncrement);
