import { repoProducts } from "../db/index.js";

async function update(req,res){
    try{
        const { nome,quantidade } = req.body
        const id = req.params.id

        const product = await repoProducts.findOne({ where:{ id }})

        if(product){
            const updateProduct = await repoProducts.update(id,{ nome,quantidade })
            return res.json({ products,updateProduct })
        }else{
            return res.status(400).send("Producto não encontrado")
        }
    }catch(error){
        console.log(error)
        res.status(500).send("Ouve um erro no servidor");
    }
}

export default update;