import {Router} from 'express';
import { crearGaleria, obtenerGalerias, obtenerUnaGaleria, actualizarUnaGaleria, eliminarUnaGaleria } from '../controllers/galeria.controller';

import uploadFile from '../middlewares/uploadFile';


const router = Router();

//crear una galeria
router.post('/', uploadFile('imagen'), crearGaleria);

//Obtener galerias
router.get('/', obtenerGalerias);

//Obtener una galeria
router.get('/:id', obtenerUnaGaleria);

//Actualizar una galeria
router.put('/:id', uploadFile('imagen'), actualizarUnaGaleria);

//eliminar una galeria
router.delete('/:id', eliminarUnaGaleria);

export default router;