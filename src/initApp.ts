import { Express } from 'express';
import connectDB from './db/connection.js';
import response from './utils/response.js';
import authRouter from './modules/auth/auth.router.js';
const initApp = async (app: Express) => {
  connectDB();
  app.get('/', (req, res) => {
    res.send('Starting with TS');
  });
  app.use('/auth', authRouter);
  app.use('*', (req, res) =>
    res
      .status(404)
      .json(response('something went wront', undefined, 'endpoint not found'))
  );
};

export default initApp;
