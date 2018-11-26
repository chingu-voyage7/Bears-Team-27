const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; //true false
const nextApp = next({dev});
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require('mongoose');
const keys = require('../config/keys');
const db = mongoose.connect(keys.mongoURI);

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
    );
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use('/api/resources', require('./routes/routes'));

  app.get('*', (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
