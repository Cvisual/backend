import { Request, Response } from "express";
import Empresa from '../models/Empresa';

export const crearEmpresa =  async (req: Request, res: Response): Promise<void> => {
  try {
    const {nombre, descripcion, historia, fecha} =  req.body;
    const empresa = await Empresa.create({nombre, descripcion, historia, fecha});
    res.status(200).json(empresa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
export const obtenerEmpresas =  async (req: Request, res: Response): Promise<void> => {
  try {
    const empresas =  await Empresa.findAll();
    res.status(200).json(empresas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
export const obtenerUnaEmpresa =  async (req: Request, res: Response): Promise<void> => {
  try {
    const {id} = req.params;
    const empresa =  await Empresa.findByPk(id);

    if(!empresa){
      res.status(404).json({ error: 'Empresa not found' });      
      return;
    }

    res.status(200).json(empresa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const actualizarUnaEmpresa =  async (req: Request, res: Response): Promise<void> => {
  try {
    const {id} = req.params;
    const {nombre, descripcion, historia, fecha} =  req.body;
    const empresa =  await Empresa.findByPk(id);

    if(!empresa){
      res.status(404).json({ error: 'Empresa not found' });      
      return;
    }

    await empresa.update({nombre, descripcion, historia, fecha});
    res.status(201).json(empresa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const eliminarUnaEmpresa =  async (req: Request, res: Response): Promise<void> => {
  try {
    const {id} = req.params;
    const empresa =  await Empresa.findByPk(id);

    if(!empresa){
      res.status(404).json({ error: 'Empresa not found' });      
    }

    await empresa?.destroy();

    res.status(200).json({message: 'Empresa eliminada'});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}