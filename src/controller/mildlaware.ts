import { RequestHandler } from 'express';
import { Schema, ValidationError } from 'yup';

type tipos = 'query' | 'body'  | 'params';
type Tpigam = Record<tipos ,Schema<any>>;
type metodo = (schemas: Partial<Tpigam>) => RequestHandler;
export const aero: metodo = (schemas) => async(req , res , next) => {
  const er: Record<string, Record<string, string>> = {};
    for(const   [key , schema]  of Object.entries(schemas)){
        try{
         await schema.validateSync(req[key as tipos] , { abortEarly: false });


        } catch(erros){
         const yuperr = erros as ValidationError;
         const enumerors: Record<string, string> = {};

          yuperr.inner.forEach(element => {
            if(element.path){
              enumerors[element.path  ] = element.message
            }
            er[key] = enumerors
          });
          
        }
    };



    //condições realizados pos validações...
    if(Object.entries(er).length ==0){
      return next();
    }
    else{
      
          res.json({erro_path: er.path    , logserrados: er})

    }
}