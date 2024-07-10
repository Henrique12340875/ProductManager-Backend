import { repoProducts } from "../db/index.js";

async function deleteById(req,res){
    try{
        const {id} = req.params.id;

        const product = await repoProducts.findOne({ where:{ id } })

        if(product){
            const deletedProduct = await repoProducts.remove(product)

            return res.json({ product,deletedProduct })
        }else{
            return res.status(400).send("Produto não encontrado!")
        }
    }catch(error){
        console.log(error)
        res.status(500).send("Ouve um erro no servidor");
    }
}

export default deleteById;