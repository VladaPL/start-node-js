// * Работа с файловой системой
// fs - file system
// Подключаем модуль для взаимодействия с файлами
const fs = require("fs");

// * readFile - для чтения данных из файла, работает асинхронно
// error - ошибка при чтении, data - данные, при чтении указанного первым аргументом файла

// fs.readFile('./text.js', (error, data) => {
//     console.log(data.toString()); // если не добавить метод toString, то мы получим данные о буфере.
// });

// Можно указать вторым параметром кодировку и не использоавть toString и вывод будет аналогичным.
// fs.readFile('./text.js', 'utf8', (error, data) => {
//     console.log(data);
// });

// * writeFile - для записи данных в файл.
// вторым аргументом мы можем добавить новый текст
// fs.readFile('./text.js', 'utf8', (error, data) => {
//     fs.writeFile('./text2.js', `${data} Hello, new file!!!`, () => {

//     });
// });

// * mkdir - создание новой папки.
// укажем первым аргументом путь к новой папке, а в колбэк добавим запись текста в файл новой папки

// fs.readFile("./text.js", "utf8", (error, data) => {
//     fs.mkdir("./files", () => {
//         fs.writeFile(
//             "./files/text3.js",
//             `${data} Hello, new file to new folder!!!`,
//             () => {
//                 error ? console.log(error) : null;
//             }
//         );
//     });
// });
// Технически, вложенность необязательна, так как все методы асинхронны, и можно записать их друг за другом.

// Сделаем аналогичную операцию синхронной, и запишем методы друг за другом.
// Чтобы быть уверенными, что сначала создастся папка, а потом в нее запишется файл, добавим ---Sync.

// fs.readFile("./text.js", "utf8", (error, data) => {
//     fs.mkdirSync("./files", () => {});
//     fs.writeFileSync(
//         "./files/text3.js",
//         `${data} Hello, new file to new folder!!!`,
//         () => {
//             error ? console.log(error) : null;
//         }
//     );
// });

// * Удаление папки и файла.

setTimeout(() => {
    if (fs.existsSync("./files/text3.js")) {
        fs.unlink("./files/text3.js", () => {});
    }
}, 4000);

setTimeout(() => {
    if (fs.existsSync("./files")) {
        fs.rmdir("./files", () => {});
    }
}, 6000);

// Код на строке 45-54 создает папку с файлом.
// Код на строке 58-68 удаляет сначала файл, а потом и папку.
