import * as yup from  'yup';
import { aero } from './mildlaware';
import { RequestHandler } from 'express';
const value  = 'body'
type tipos = 'query' | 'body'  | 'params';
export const cadastramento = aero({
 body: yup.object().shape({
    horario: yup.string().required().min(4),
    dia: yup.string().required().min(4),

 }),
 query: yup.object().shape({
   reserva: yup.string().required().min(3)


 }),
});
type metodo = (tip: tipos) => RequestHandler
export const posts: RequestHandler = (req, res) => { 
    res.status(201).json({ msg: 'Usuário criado com sucesso!', logs: req.body }); 
};