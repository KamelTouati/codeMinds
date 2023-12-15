const handleDublicatedEmailError = (err) => {
  if (err.code === 11000) {
    err.statusCode = 400;
    err.message = "that email is already registered";
  }

  return err;
};

module.exports = handleDublicatedEmailError;
