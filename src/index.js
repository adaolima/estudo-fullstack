// const path = require('path');
const express = require('express');

// --------- Old way to use ForestAdmin
  // const ForestAdmin = require('forest-express-sequelize');
  // const secret = require('../config/secret');
  // const models = require('./models');
//----------

const app = express();

//--------- Old way to use ForestAdmin
  // app.use(
  //   ForestAdmin.init({
  //     modelsDir: __dirname + '/models',
  //     envSecret: secret.FOREST_ENV_SECRET,
  //     authSecret: secret.FOREST_AUTH_SECRET,
  //     sequelize: models.sequelize
  //   })
  // );
//-----------

//static files
app.use(express.static('public'));

//start server
app.listen(process.env.PORT || 5000);