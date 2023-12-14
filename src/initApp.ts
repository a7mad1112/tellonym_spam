import { Express } from 'express';

const initApp = async (app: Express) => {
  app.get('/', (req, res) => {
    res.send('Starting with TS');
  });
};

export default initApp;
