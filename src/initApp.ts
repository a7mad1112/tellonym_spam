import { Express } from 'express';
import connectDB from './db/connection.js';
const initApp = async (app: Express) => {
  connectDB();
  app.get('/', (req, res) => {
    res.send('Starting with TS');
  });
};

export default initApp;
