import { Router } from "express";
import { create,read,readByName,update,deleteById } from "../controllers/index.js";
import {validateBody,validateUpdate} from "../middlewares/validate.js";

const routes = Router();

routes.get('/',(req,res) => {
    res.send('Hello')
});

routes.get('/products/read',read);

routes.post('/products/create',validateBody,create);

routes.put('/products/update/:id',validateUpdate,update);

routes.delete('/products/delete/:id',deleteById);

routes.get('/products/read/:nome',readByName)

export default routes;
