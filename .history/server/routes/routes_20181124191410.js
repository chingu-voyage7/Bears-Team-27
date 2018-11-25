const express = require('express');
const router = express.Router();
const Photos = require('../models/Resource');

//const passportService = require('../services/passport');
//const passport = require('passport');

//const requireAuth = passport.authenticate('jwt', {session: false});
//const requireSignin = passport.authenticate('local', {session: false});

module.exports = app => {
  //app.post('/api/signin', requireSignin, Authentication.signin);
  //app.post('/api/signup', Authentication.signup);

  //app.get('/api/resources', requireAuth, Resource.getAllResources);

  app.post('/api/resources/new', Resource.createNewResource);
};
