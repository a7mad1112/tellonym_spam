import 'dotenv/config';
import express from 'express';
import initApp from './initApp.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
initApp(app);

app.listen(PORT, () => {
  console.log('App is running on port ' + PORT);
});
