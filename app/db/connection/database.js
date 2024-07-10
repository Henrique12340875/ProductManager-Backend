import { DataSource } from "typeorm";
import {Products} from "../model/products.js";

const db = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:'postgres',
    password:'re14091106',
    database:'products',
    synchronize:true,
    logging:false,
    entities:[Products],
    migrations:[],
    subscribers:[]
})

db.initialize()
    .then(() => console.log("Conectado!"))
    .catch((error) => console.log("Erro:"+error))

const repoProducts = db.getRepository('Products');

export default repoProducts;