/**
 * Попытка доступа к переменной нового типа приведёт к ошибке.
 * Область до места объявления переменной называется «временная мёртвая зона».
 */
console.log(message);

let message = 'hello';
let num = "3"
num = num*3 
