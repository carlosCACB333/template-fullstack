import express, { Response } from 'express';
import { IError } from '../interfaces';

const apiRouter = express.Router();
const router = express.Router();

apiRouter.post('/hello', async (req, res) => {
  console.log(req.body);

  res.status(200).json({ message: 'Hello auth!' });
});

apiRouter.use('/*', (req, res: Response<IError>) => {
  // Api no econtrado
  return res.status(404).json({
    status: 400,
    error: 'Not found',
    message: 'Esta ruta no existe ' + req.originalUrl,
  });
});
router.use('/api/v1', apiRouter);
export default router;
