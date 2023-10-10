// Напиши скрипт, який виконає наступні операції.
// Порахує і виведе в консоль кількість категорій в ul#categories,
// тобто елементів li.item. Вийде 'У списку 3 категорії.'.
// Для кожного елемента li.item в списку ul#categories,
// знайде і виведе в консоль текст заголовка елемента (тега h2)
//  і кількість елементів в категорії (всіх вкладених в нього елементів li).
// Наприклад, для першої категорії вийде:
// Категорія: Тварини
// Кількість елементів: 4

const categoriesListRef = document.getElementById("categories");
const titleRef = document.querySelector(".animals");

const task1NewElem = document.createElement("p");
task1NewElem.textContent = `У списку ${categoriesListRef.children.length} категорії.`;

const task1NewElem2 = document.createElement("p");
task1NewElem2.textContent = `Категорія: ${titleRef.textContent}`;

categoriesListRef.append(task1NewElem, task1NewElem2);