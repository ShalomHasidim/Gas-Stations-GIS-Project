const express = require('express');
const stations = require('../routes/stations');

module.exports = function(app) {
   // app.use(express.json());
    app.use('/',stations);
  }