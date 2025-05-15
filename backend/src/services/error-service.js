class InvalidAttempt extends Error {
  constructor(message, title = "Invalid Attempt") {
    super(message);
    this.title = title;
  }
}

function errorHandler(res, error) {
  let message = { error: true };

  if (error.constructor === InvalidAttempt) {
    message = {
      error: true,
      title: error.title,
      message: error.message,
    };
  }

  res.status(500).send(message);
}

module.exports = {
  errorHandler,
  InvalidAttempt,
};
