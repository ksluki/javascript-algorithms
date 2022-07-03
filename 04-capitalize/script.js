/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
 */

function capitalize(str) {
  const mas = str.split(" ");
  const result = [];
  mas.forEach(function (word) {
    const firstLetter = word.slice(0, 1);
    result.push(firstLetter.toUpperCase() + word.slice(1));
  });
  return result.join(" ");
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize("молодость всё простит")); // "Молодость Всё Простит"
