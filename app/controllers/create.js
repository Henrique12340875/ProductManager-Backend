import { repoProducts } from "../db/index.js";

async function create(req,res){
    try{
        const { nome,quantidade,codigo }= req.body

        const data = await repoProducts.create(req.body)

        await repoProducts.save(data)

        return res.json({ data })
    }catch(error){
        console.log(error);
        res.status(500).send("Ouve um erro no servidor");
    }
}

export default create;