import { Request, Response } from "express";
import Galeria from "../models/Galeria";

export const crearGaleria = async (req: Request, res: Response): Promise<void> => {
  try {    
    const {empresa_id, imagen, descripcion} = req.body;
    const galeria =  await Galeria.create({empresa_id, imagen, descripcion,});
    res.status(200).json(galeria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const obtenerGalerias = async (res: Response): Promise<void> => {
  try {
    const galerias = await Galeria.findAll();
    res.status(200).json(galerias);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const obtenerUnaGaleria = async (req: Request, res: Response): Promise<void> => {
  try {
    const {id} =  req.params;
    const galeria =  await Galeria.findByPk(id);
    if (!galeria) {
      res.status(404).json({ error: 'Galeria not found' });
      return;
    }
    res.status(200).json(galeria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const actualizarUnaGaleria = async (req: Request, res: Response): Promise<void> => {
  try {    
    const {id} =  req.params;
    const {empresa_id, imagen, descripcion} = req.body;
    const galeria =  await Galeria.findByPk(id);

    if (!galeria) {
      res.status(404).json({ error: 'Galeria not found' });
      return;
    }

    await galeria.update({empresa_id, imagen, descripcion});
    res.status(200).json(galeria);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const eliminarUnaGaleria = async (req: Request, res: Response): Promise<void> => {
  try {
    const {id} =  req.params;
    const galeria =  await Galeria.findByPk(id);
    if (!galeria) {
      res.status(404).json({ error: 'Galeria not found' });
      return;
    }
    await galeria?.destroy();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}