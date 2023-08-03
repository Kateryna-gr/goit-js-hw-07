const ingredients = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];

const ul = document.querySelector("ul");

const markup = ingredients.map((ingr) => {
  const li = document.createElement("li");
  li.textContent = ingr;
  li.className = "item";

  return li;
});

ul.append(...markup);
