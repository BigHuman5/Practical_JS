const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
const { getTwoArgsOperation } = require("./operations");
const { getOneArgOperation } = require("./operations");

const app = express();
app.use(bodyParser.json());

app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname + '/index.html'));
})

app.post("/two-args", function(request, response) {
    const { firstArg, secondArg, operation } = request.body;
    var firstArgum=Number(firstArg);
    var secondArgum=Number(secondArg);
    	if(!isFinite(firstArgum) || !isFinite(secondArgum)) { 
        response.status(400).json("Ошибка в числах."); // Проверка на ошибку ввод слов вместо чисел
    	// Без ! перед isFinite не работает
    }
    else {
    	try {
        response
            .status(200)
            .json(getTwoArgsOperation(operation)(firstArgum, secondArgum));
    } catch (e) {
        response.status(400).json(e.message);
    }
}});
//
app.post("/one-arg", function(request, response) {
    const { firstArg, operation } = request.body;
    var firstArgum=Number(firstArg);
        if(!isFinite(firstArgum)) {
        response.status(400).json("Ошибка в числе."); // Проверка на ошибку ввод слов вместо чисел
        // Без ! перед isFinite не работает
    }
    else {
        try {
        response
            .status(200)
            .json(getOneArgOperation(operation)(firstArgum));
    } catch (e) {
        response.status(400).json(e.message);
    }
}});

module.exports = app;
app.listen(3000, () => {
    console.log('App started on https://localhost:3000');
});