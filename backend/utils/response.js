let response = (status, message, data) => {
  return {
    status: status,
    message: message || null,
    data: data || null,
  };
};

module.exports = response;
