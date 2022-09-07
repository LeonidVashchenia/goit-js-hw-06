const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listIngredients = document.querySelector("#ingredients");
const newElements = [];

// const listItems = ingredients.map((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = `${ingredient}`;
//   listItem.classList.add("item");
//   newElements.push(listItem);
// });

// listIngredients.append(...newElements);

for (const ingredient of ingredients) {
  const listItem = document.createElement("li");
  listItem.textContent = `${ingredient}`;
  listItem.classList.add("item");
  newElements.push(listItem);
}

listIngredients.append(...newElements);
