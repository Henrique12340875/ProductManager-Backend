import { repoProducts } from "../db/index.js";
import { Like } from "typeorm";

async function readByName(req,res){
    try{
        const product = await repoProducts.findOne({ where:{ nome:Like(`%${req.params.nome}%`) }})

        if(product){
            return res.json({ product })
        }else{
            return res.status(201).send("Produto não encontrado!")
        }
    }catch(error){
        console.log(error)
        res.status(500).send("Ouve um erro no servidor");
    }
}

export default readByName;