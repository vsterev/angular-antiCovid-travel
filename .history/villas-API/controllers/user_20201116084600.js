const { userModel, tokenBlacklistModel } = require('../models');
const { createToken, verifyToken } = require('../utils/jwt');
const bcrypt = require('bcrypt');

module.exports = {
  get: {
    logout: (req, res, next) => {
      const token = req.token || req.cookies['auth-cookie'];
      // if (!token) {
      //   res.redirect('/');
      //   return;
      // }
      tokenBlacklistModel
        .create({ token })
        .then(() => {
          res.clearCookie('auth-cookie').json({ logoutSuccess: true });
          // res.status(200).redirect('/');
        })
        .catch((err) => next(err));
    },
    verifyLogin: (req, res, next) => {
      const token = req.headers.authorization;
      Promise.all([verifyToken(token), tokenBlacklistModel.findOne({ token })])
        .then(([data, blacklistToken]) => {
          if (blacklistToken) {
            return Promise.reject(new Error('blacklisted token'));
          }
          // console.log(data)
          userModel.findById(data.userId).then((user) => {
            req.user = user;
            const userData = { name: user.name, email: user.email, userId: user.id };
            res.status(200).json({ status: true, userData });
          });
        })
        .catch((err) => {
          if (['invalid token', 'token expired', 'blacklisted token', 'jwt must be provided'].includes(err.message)) {
            res.status(401).json({ status: false, error: 'UNAUTHORIZED!' });
            return;
          }
          res.send({ status: false });
        });
    },
  },
  post: {
    login: (req, res, next) => {
      const { email, password } = req.body;
      userModel
        .findOne({ email })
        .then((userData) => {
          if (!userData) {
            // res.render('login', { errors: { email: `This user ${email} not exist!` } });
            // res.status(401).json({ status: false, msg: `The user ${email} not exist!` });
            res.status(401).json({ msg: `The user ${email} not exist!` });
            return;
          }
          const match = Promise.all([userData, userData.matchPassword(password)]) //promise in promise - mot nested
            .then(([userData, match]) => {
              if (!match) {
                // res.render('login', { errors: { password: 'Password mismatch!' } });
                // res.status(401).json({ status: false, msg: 'Password mismatch!' });
                res.status(401).json({ msg: 'Password mismatch!' });
                return;
              }
              req.user = userData;
              const token = createToken({ userId: req.user.id });
              res.cookie('auth-cookie', token, { httpOnly: true });
              res.status(200).send({
                // status: true,
                // token,
                name: userData.name,
                email: userData.email,
                userId: userData.id,
              });
              return;
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
    register: (req, res, next) => {
      const { name, email, password } = req.body;
      userModel
        .create({ name, email, password, likes: [], villas: [], reservations: [] })
        .then((user) => {
          req.user = user;
          // signin(req, res);
          const token = createToken({ userId: req.user.id });
          res
            .cookie('auth-cookie', token, { httpOnly: true })
            .status(200)
            .json({
              status: true,
              //   token,
              userData: { name: user.name, email: user.email, userId: user.id },
            });
          return;
        })
        .catch((err) => {
          if ((err.code = 11000 && err.name === 'MongoError')) {
            res.status(403).json({ status: false, msg: 'Email already exist' });
            return;
          }
          res.status(403).json({ status: false, msg: err.message });
          console.error(err);
          return;
        });
    },
  },
  put: {
    passChange: (req, res, next) => {
      //ne raboti validation pri update
      const user = req.user;
      let { oldPassword, password } = req.body;
      userModel
        .findById(user.id)
        .then((user) => {
          return Promise.all([user, user.matchPassword(oldPassword)]);
        })
        .then(([user, match]) => {
          if (!match) {
            res.status(401).json({ status: false, msg: "Old Password doesn't correct" });
            return;
          }
          return userModel.findByIdAndUpdate(user.id, { password });
        })
        .then((a) => {
          // console.log(a)
          res.status(201).json({ status: true, msg: 'Passwod is changed !' });
          // res.redirect('/');
          return;
        })
        .catch((err) => {
          res.status(400).json({ status: false, msg: err });
          return;
        });
    },
    nameChange: (req, res) => {
      const user = req.user;
      const { name } = req.body;
      // console.log(user, name)
      // return
      // userModel.findByIdAndUpdate(user.id, { name }, { runValidators: true })
      userModel
        .findByIdAndUpdate(user.id, { name }, { runValidators: true })
        .then((user) => {
          // console.log(user)
          res.status(200).json({ status: true, msg: 'Name is changed!' });
          return;
        })
        .catch((err) => {
          res.status(403).json({ status: false, msg: err.message });
          console.error(err);
          return;
        });
    },
  },
};
