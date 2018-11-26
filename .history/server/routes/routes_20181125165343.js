const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource');

//const passportService = require('../services/passport');
//const passport = require('passport');

//const requireAuth = passport.authenticate('jwt', {session: false});
//const requireSignin = passport.authenticate('local', {session: false});

router.post('/new', async (req, res) => {
  console.log(`=================${req.body}==============`);
  const resource = await new Resource(req.body).save();
  res.send(resource);
});
router.get('/', async (req, res) => {
  const resources = await Resource.find();
  res.send(resources);
});
module.exports = router;
