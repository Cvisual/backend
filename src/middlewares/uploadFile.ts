import multer from 'multer';

const uploadFile = (campo: string) => {
  const storage = multer.diskStorage({
    destination: './public',
    filename: (req, file, cb) => {
      const extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
      cb(null, file.fieldname + '-' + Date.now() + extension);
    }
  })
  
  const upload = multer({storage: storage}).single(campo);
  return upload;
}

export default uploadFile;