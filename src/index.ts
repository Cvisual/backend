<<<<<<< Updated upstream
=======
import express from 'express';
import {json} from "body-parser";
import rutasEmpresa from './routes/empresa.routes';
import rutasGalerias from './routes/galeria.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use(express.static('public'));

//rutas
app.use('/empresas', rutasEmpresa);
app.use('/galerias', rutasGalerias);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})
>>>>>>> Stashed changes
