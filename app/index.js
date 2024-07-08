import express from 'express';
import routes from './routes/index.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(routes);

const port = process.env.PORT;

const server = app.listen(port,'localhost',()=>{
    console.log(`Rodando em http://localhost:${port}/`);
});