const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

//const passportService = require('../services/passport');
//const passport = require('passport');

//const requireAuth = passport.authenticate('jwt', {session: false});
//const requireSignin = passport.authenticate('local', {session: false});

router.post('/api/resources/new', async (req, res) => {
  const resource = await new Resource(req.body).save();
  res.send(resource);
});
router.get('/', async (req, res) => {
  const resources = await Resource.find();
  console.log('===hello===');
  console.log({resources});
  res.send(resources);
});
module.exports = router;
