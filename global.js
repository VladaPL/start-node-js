// В ноде нет доступа к объекту виндоу, но есть свои объекты.
// Полный список по ссылке https://nodejs.org/api/globals.html

// * Глобальный объект

//console.log(global);

// setTimeout(() => {
//     console.log("Привет! Я сеттаймаут!");
// }, 2000);

// * Чтобы получить путь к директории:
// console.log(__dirname);

// * Чтобы получить путь к файлу:
//console.log(__filename);


// * Объект PROCESS включает конфигурации, переменные среды, версии и т.д.
// console.log(process);
// К любому из параметров можно получить доступ и использовать при разработке.
// Самый часто используемый process.env - обычно в этот объект добавляются переменные по типу develope or production.
// console.log(process.env);

// * argv - массив, который содержит аргументы командной строки (хранит строки).
// console.log(process.argv);
// В консоль выведет:
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\VLADA\\git-repositories\\start-node-js\\global'
//   ]
// Если при вызове добавить дополнительные аргументы типа:
// node global 1 Vlada [1,2,3]
// то при запуске эти значения будут доступны в массиве argv:
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\VLADA\\git-repositories\\start-node-js\\global',
//     '1',
//     'Vlada',
//     '[1,2,3]'
//   ]

// console.log(`Hello, ${process.argv[3]}!`); // Hello, Vlada!

// * URL объект - с его помощью можно работать с получаемыми с сервера url-адресами.
// URL - это конструктор, и при создании мы передаем в него адрес.
const url = new URL('https://webDev.com/path/name#test');
// Можно распарсить строку и получить полный доступ к ее компонентам для комфортной работы по написанию логики.
console.log(url.hostname); // сведения о хосте
console.log(url.href); // полный путь
console.log(url.pathname);
console.log(url.hash);

