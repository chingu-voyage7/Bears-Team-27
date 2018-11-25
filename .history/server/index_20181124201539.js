const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_DEV !== 'production'; //true false
const nextApp = next({dev});
const handle = nextApp.getRequestHandler(); //part of next config
const mongoose = require('mongoose');

const db = mongoose.connect(
  'mongodb://rachna:rachna@ds115154.mlab.com:15154/box-drive',
);

nextApp.prepare().then(() => {
  // express code here
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  console.log(1);
  app.use('/api/resources', require('./routes/routes'));
  console.log(2);
  app.get('*', (req, res) => {
    return handle(req, res); // for all the react stuff
  });
  app.listen(PORT, err => {
    if (err) throw err;
    console.log(`ready at http://localhost:${PORT}`);
  });
});
