// Завдання 4
// Лічильник складається зі спана і кнопок, які повинні збільшувати і зменшувати значення лічильника на 1.
// Створи змінну counterValue в якій буде зберігається поточне значення   лічильника.
// Створи функції increment і decrement для збільшення і зменшення значення   лічильника.
// Додай слухачі кліків на кнопки, виклики функцій та оновлення інтерфейсу
// 

const counterValue = document.getElementById("value");
let value = 0;

document.querySelector('[data-action="increment"]').addEventListener("click", () => {
  counterValue.textContent = ++value;
});

document.querySelector('[data-action="decrement"]').addEventListener("click", () => {
  counterValue.textContent = --value;
});