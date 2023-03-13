const createError = (statusCode, error, messageDes) => ({
  statusCode,
  message: error,
  messageDes,
});

module.exports = createError;
