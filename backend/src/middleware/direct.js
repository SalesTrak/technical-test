const { errorHandler } = require("../services/error-service");

module.exports = {
  direct,
};

function direct(func) {
  return (req, res, next) => {
    const info = {
      ...(req.files && { files: req.files }),
      ...req.query,
      ...req.body,
      ...req.params,
    };

    func(info).then(({ status = 200, ...send } = {}) => {
      res.status(status).send(send);
      next();
    }).catch(error => errorHandler(res, error));
  };
}
