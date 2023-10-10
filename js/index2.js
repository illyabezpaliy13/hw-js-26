// В HTML є пустий список ul#ingredients.
// В JS є масив рядків.
// Напиши скрипт, який для кожного елемента масиву ingredients створить окремий li,
// після чого вставить всі li за одну операцію в список ul.ingredients.
// Для створення DOM-вузлів використовуй document.createElement().
const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const ingredientsRef = document.querySelector('#ingredients');
ingredients.forEach(ingredient => {
  const listItem = document.createElement('li'); 
  listItem.textContent = ingredient; 
  ingredientsRef.appendChild(listItem); 
});
console.log(ingredientsRef);
