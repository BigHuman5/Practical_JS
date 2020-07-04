// подключение express
const express = require("express");
const bodyParser = require('body-parser');
// создаем объект приложения
const app = express();
// Подключаем body-parser
app.use(bodyParser.json());

// Определяем обработчик корневого урла с методом POST
app.post("/", function(request, response) {
    const { firstArg, secondArg, operation } = request.body; // деструктуризация
    if (operation === '+') {
        response.status(200).json(firstArg + secondArg);
    } else if (operation === '-') {
        response.status(200).json(firstArg - secondArg);
    } else if (operation === '/') {
        response.status(200).json(firstArg / secondArg);
    } else if (operation === '*') {
        response.status(200).json(firstArg * secondArg);
    }
    else {
    	response.send("<h2>Привет Express!</h2>");
    }
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);