import yup from 'yup'
import { object } from 'yup'

async function validateBody(req,res,next){
    const products = object({
        nome:yup.string().required().min(3),
        quantidade:yup.number().required(),
        codigo:yup.string().required().min(10).max(10)        
    });

    const validation = await products.validate(req.body);

    if(validation){
        return next()
    }else{
        return res.send("A algo de errado!")
    }
}

async function validateUpdate(req,res,next){
    const productId = object({
        id:yup.number().required()
    });

    const validation = await productId.validate({ id: req.params.id });

    if(validation){
        return next()
    }else{
        return res.send("A um erro")
    }
}

export {validateBody,validateUpdate};