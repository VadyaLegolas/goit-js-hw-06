const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((el) => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");
  return liEl;
});

ingredientsEl.append(...elements);
// console.log(ingredientsEl);
