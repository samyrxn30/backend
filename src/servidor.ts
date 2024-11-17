import express = require('express');
import  {rotas } from './controller/dependencies/controler';
const servidor = express();
const callback = 3333;
servidor.use(express.json())

servidor.post('/etc', rotas.cadastramento, rotas.posts);

servidor.listen(callback , ()=>{
 console.log('http://localhost:3333');


})