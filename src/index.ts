import express from 'express';
import {json} from "body-parser";
import rutasEmpresa from './routes/empresa.routes';

const app = express();
const port = process.env.PORT || 3000;

app.use(json());
app.use('/empresas', rutasEmpresa);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})