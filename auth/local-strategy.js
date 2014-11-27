var passport = module.parent.exports.passport,
  LocalStrategy = require('passport-local').Strategy,
  Admins = require('../models/admins.js'),
  Users = require('../models/users.js');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use('AdminLogin', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    Admins.findOne({ email:username }, function(err, adm) {
      if (err) { return done(err); }
      if (!adm) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!adm.authenticate(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, adm);
    });
  }
));

passport.use('UserLogin', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    username = (username) ? username.toLowerCase() : "";
    Users.findOne({ email:username }, function(err, usr) {
      if (err) { return done(err); }
      if (!usr) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!usr.authenticate(password)) {
        return done(null, false, { message: 'Your password is incorrect.' });
      }
      return done(null, usr);
    });
  }
));

passport.use('UserRegister', new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback : true
  },
  function(req, username, password, done) {
    username = (username) ? username.toLowerCase() : "";
    process.nextTick(function() {
      if (!req.user) {
        // Not logged in
        Users.findOne({ email:username }, function(err, usr) {
          if (err) { return done(err); }
          if (usr) {
            return done(null, false, { message: 'Already taken' });
          }
          if (!usr.authenticate(password)) {
            return done(null, false, { message: 'Your password is incorrect.' });
          }
          return done(null, usr);
        });
      } else {
         // Ignoring logged int user
         return done(null, req.user);
      }
    });
  }
));
