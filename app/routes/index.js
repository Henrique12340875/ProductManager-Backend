import { Router } from "express";

const routes = Router();

routes.get('/',(req,res) => {
    res.send('Hello')
});

routes.get('/products/read');

routes.post('/products/create');

routes.put('/products/update');

routes.delete('/products/delete');

export default routes;
