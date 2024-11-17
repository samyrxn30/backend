import { RequestHandler } from 'express';
import { Schema, ValidationError } from 'yup';
import { cadastramento,  posts } from '../base';
export const rotas = {
    cadastramento, 
    posts,
};