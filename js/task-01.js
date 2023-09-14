// Existe una lista de categorías en el HTML ul#categories.

// <ul id="categories">
//   <li class="item">
//     <h2>Animals</h2>
//     <ul>
//       <li>Cat</li>
//       <li>Hamster</li>
//       <li>Horse</li>
//       <li>Parrot</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Products</h2>
//     <ul>
//       <li>Bread</li>
//       <li>Prasley</li>
//       <li>Cheese</li>
//     </ul>
//   </li>
//   <li class="item">
//     <h2>Technologies</h2>
//     <ul>
//       <li>HTML</li>
//       <li>CSS</li>
//       <li>JavaScript</li>
//       <li>React</li>
//       <li>Node.js</li>
//     </ul>
//   </li>
// </ul>

// Escriba un script que:

// Cuente y muestre en la consola el número de categorías en ul#categories, es decir. los artículos li.item.
// Para cada elemento li.item en la lista ul#categories, encuentre y envíe a la consola el texto del título del artículo (tag <h2>) y el número de artículos en la categoría (todo anidado <li>).
// Como resultado, se mostrarán los siguientes mensajes en la consola.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categories.length}`);
categories.forEach(item => {
    console.log(`Category: ${item.querySelector('h2').textContent}`)
    console.log(`Elements: ${item.querySelectorAll('li').length}`)

});