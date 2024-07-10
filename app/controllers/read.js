import { repoProducts } from "../db/index.js";

async function read(req,res){
    try{
        const results = await repoProducts.find();

        return res.json({ results });
    }catch(error){
        console.log(error)
        return res.status(500).send("Houve um erro no servidor!")
    }
}

export default read;