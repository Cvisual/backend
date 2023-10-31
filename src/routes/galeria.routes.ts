import {Router} from 'express';
import { crearGaleria, obtenerGalerias, obtenerUnaGaleria, obtenerGaleriasPorEmpresa, actualizarUnaGaleria, eliminarUnaGaleria } from '../controllers/galeria.controller';

//const uploadFile = require('../middlewares/uploadFile');


const router = Router();

//crear una galeria
router.post('/', crearGaleria);

//Obtener galerias
router.get('/', obtenerGalerias);

//Obtener una galeria
router.get('/:id', obtenerUnaGaleria);

//Obtener una galerias de imagen por empresa
router.get('/empresa/:id', obtenerGaleriasPorEmpresa);

//Actualizar una galeria
router.put('/:id', actualizarUnaGaleria);

//eliminar una galeria
router.delete('/:id', eliminarUnaGaleria);

export default router;