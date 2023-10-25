import { Router } from "express";
import { crearEmpresa, obtenerEmpresas, obtenerUnaEmpresa, actualizarUnaEmpresa, eliminarUnaEmpresa } from '../controllers/empresa.controller';

const router = Router();

//Crear empresa
router.post('/', crearEmpresa);

//Obtener empresas
router.get('/', obtenerEmpresas);

//Obtener una empresa
router.get('/:id', obtenerUnaEmpresa);

//Actualizar una empresa
router.put('/:id', actualizarUnaEmpresa);

//Eliminar una empresa por id
router.delete('/:id', eliminarUnaEmpresa);

export default router;