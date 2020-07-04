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
    switch(operation)
    {
        case '+': response.status(200).json(firstArg + secondArg); break;
        case '-': response.status(200).json(firstArg - secondArg); break;
        case '/': { 
            if(secondArg==0) response.status(400).json('Второй аргумент равен 0');
            else response.status(200).json(firstArg / secondArg); 
            break; }
        case '*': response.status(200).json(firstArg * secondArg); break;
        case '^': response.status(200).json(Math.pow(firstArg,secondArg)); break;
        default: response.status(400).json('Ошибка'); break;
    }
});
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);