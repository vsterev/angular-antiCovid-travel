const routes = require('express').Router();
const offer = require('./offer');
const user = require('./user');
const reservation = require('./reservation');
const villaController = require('../controllers/offer');

routes.use('/user', user);
routes.use('/offer', offer);
routes.use('/reservation', reservation);
routes.use('*', villaController.get.notFound);

module.exports = routes;

//   module.exports = {
//     offer,
//     user,
//     reservation,
//   };
