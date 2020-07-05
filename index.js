const express = require("express");
const bodyParser = require('body-parser');
const { getTwoArgsOperation } = require("./operations");

const app = express();
app.use(bodyParser.json());

app.post("/two-args", function(request, response) {
    const { firstArg, secondArg, operation } = request.body;
    var firstArgum=Number(firstArg);
    var secondArgum=Number(secondArg);
    	if(!isFinite(firstArgum) || !isFinite(secondArgum)) response.status(400).json("Ошибка в числах."); // Проверка на ошибку ввод слов вместо чисел
    	// Без ! перед isFinite не работает
    else {
    	try {
        response
            .status(202)
            .json(getTwoArgsOperation(operation)(firstArgum, secondArgum));
    } catch (e) {
        response.status(400).json(e.message);
    }
}});

app.listen(3000, () => {
    console.log('App started on https://localhost:3000');
});