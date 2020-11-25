const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const villaController = require('../controllers/offer');
const apiRouter = require('../routes');
const config = require('./config');

module.exports = (app) => {
  app.use(
    cors({
      origin: config.origin,
      credentials: true,
    })
  );
  app.use(express.json());
  //TODO: Setup the body parser
  app.use(express.urlencoded({ extended: true })); //to recognize req.body in post request
  app.use(cookieParser('secret'));

  //TODO: Setup the static files
  //static should be deleted
  app.use('/static', express.static('static'));
  // app.use('/', routes);
  // app.use('/', routes.home);
  app.use('/api', apiRouter);

  //   app.use('/user', routes.user);
  //   app.use('/offer', routes.offer);
  //   app.use('/reservation', routes.reservation);
  //   app.use('*', villaController.get.notFound);
};
