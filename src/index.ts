import express from 'express';
import cors from 'cors';
import {json} from "body-parser";
import rutasEmpresa from './routes/empresa.routes';
import rutasGalerias from './routes/galeria.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors())
app.use(json());
app.use(express.static(__dirname + '/public'));

//rutas
app.use('/empresas', rutasEmpresa);
app.use('/galerias', rutasGalerias);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
