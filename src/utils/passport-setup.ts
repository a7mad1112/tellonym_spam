import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
const { GOOGLE_CLIENT_ID, GOOGLE_SECRET_KEY } = process.env;
passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID || '',
      clientSecret: GOOGLE_SECRET_KEY || '',
      callbackURL: 'http://localhost:5000',
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);
