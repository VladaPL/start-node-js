const userName = 'Vlada';

const sayHi = (userName) => `Hello, ${userName}!`;

// console.log(sayHi(userName));

// * Module
// Берем глабальный объект module и записываем в него переменную:
module.exports = {
    userName,
    sayHi,
};
// Теперь данные этого модуля можно использовать в других частях приложения.


