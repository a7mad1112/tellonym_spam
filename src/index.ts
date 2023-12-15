import 'dotenv/config';
import express from 'express';
import initApp from './initApp.js';
import passport from 'passport';
import './utils/passport-setup.js';
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(passport.initialize());
initApp(app);

app.listen(PORT, () => {
  console.log('App is running on port ' + PORT);
});
