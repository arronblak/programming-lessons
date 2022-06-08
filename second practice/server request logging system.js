const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");

    response.write("<h2>hello world</h2>");
    response.end();
};
http.createServer(requestHandler).listen(3000)
const fs = require("fs");
fs.appendFileSync("hello.txt", "хай Дино!");
fs.appendFile("hello.txt", "Дино!", function (error) {
    if (error) throw error; // если возникла ошибка
    console.log("Запись файла завершена. Содержимое файла:");
    let data = fs.readFileSync("hello.txt", "utf8");
    console.log(data); // выводим считанные данные
});