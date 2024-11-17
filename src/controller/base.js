"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posts = exports.cadastramento = void 0;
var yup = require("yup");
var mildlaware_1 = require("./mildlaware");
var value = 'body';
exports.cadastramento = (0, mildlaware_1.aero)({
    body: yup.object().shape({
        horario: yup.string().required().min(4),
        dia: yup.string().required().min(4),
    }),
    query: yup.object().shape({
        reserva: yup.string().required().min(3)
    }),
});
var posts = function (req, res) {
    res.status(201).json({ msg: 'Usuário criado com sucesso!', logs: req.body });
};
exports.posts = posts;
