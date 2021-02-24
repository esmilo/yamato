const trimmer = require('./lib/trimmer');

function yamato() {
  return function (req, res, next) {
    if (req.body) {
      req.body = trimmer(req.body);
    }

    next();
  };
}

module.exports = yamato;
