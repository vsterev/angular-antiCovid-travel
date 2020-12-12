const jwt = require('./jwt');
const { userModel, tokenBlacklistModel } = require('../models');
const config = require('../config/config');

function auth() {
  return function (req, res, next) {
    const token = req.cookies['auth-cookie'] || '';
    // const token = req.headers.authorization || '';

    // if (!token) {
    //     res.redirect('/');
    //     return;
    // }
    Promise.all([jwt.verifyToken(token), tokenBlacklistModel.findOne({ token })])
      .then(([data, blackListToken]) => {
        if (blackListToken) {
          return Promise.reject(new Error('blacklisted token'));
        }
        userModel.findById(data.userId).then((user) => {
          req.user = user;
          next();
        });
      })
      .catch((err) => {
        // if (!redirectUnauthenticated) {
        //     next();
        //     return;
        // }
        if (['token expired', 'blacklisted token', 'jwt must be provided', 'jwt malformed'].includes(err.message)) {
          // res.redirect('/user/login?error')
          console.log('tuk e' + err);
          res.status(401).json({ message: 'Invalid token' });

          // res.status(401).clearCookie(config.authCookieName).json({ logoutSuccess: true });

          // res.json({ message: 'Invalid token!' });
          return;
        }
        console.log(err);
        // res.status(401).clearCookie(config.authCookieName).json({ logoutSuccess: true });
        // res.json({ message: 'Invalid token!' });
      });
  };
}
module.exports = auth;
