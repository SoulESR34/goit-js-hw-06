// TML tiene una lista vacía ul#ingredients.

// <ul id="ingredients"></ul>

// En JavaScript hay una array de secuencias.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Escriba un script que para cada elemento del array ingredients:

// Cree un elemento separado <li>. Asegúrese de usar el método document.createElement().
// Añada el nombre de un ingrediente como contenido de texto.
// Añada una clase item al elemento.
// Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.

const newIngredientsArr = ["Potatoes", "Mushrooms", "Garlic", "Tomatos", "Herbs", "Condiments"];
const ingredients = document.querySelector('#ingredients');

for (const i of newIngredientsArr) {
    let newIngredient = document.createElement('li')
    newIngredient.textContent = i
    ingredients.appendChild(newIngredient)
}

