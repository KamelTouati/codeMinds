const MyResponse = require("../models/Response");
const { strings } = require("../constants");
exports.not_supported_operation = (req, res, next) => {
  res.statusCode = 405;
  res.json(
    new MyResponse(
      false,
      `${req.method} ${strings.OPERATION_NOT_SUPPORTED}`,
      null
    )
  );
};

exports.all_operations = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  next();
};
