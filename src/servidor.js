"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controler_1 = require("./controller/dependencies/controler");
var servidor = express();
var callback = 3333;
servidor.use(express.json());
servidor.post('/etc', controler_1.rotas.cadastramento, controler_1.rotas.posts);
servidor.listen(callback, function () {
    console.log('http://localhost:3333');
});
