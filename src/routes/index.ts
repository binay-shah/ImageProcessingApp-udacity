import express from 'express';
import imageProcessor from './api/imageProcessor';
const routes = express.Router();

routes.get('/', (req: express.Request, res: express.Response) => {
  res.send('Main route');
});

routes.use('/images', imageProcessor);

export default routes;
