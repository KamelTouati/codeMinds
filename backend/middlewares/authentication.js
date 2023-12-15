const Users = require("../models/users");
const jwt = require("jsonwebtoken");

const {
  SECRET_JWT,
  JWT_EXPIRE_TIME,
} = require("../configs/environment.config");
const { UserRole } = require("../utils/enums");

//! check if user exists
const verifyUser = async (req, res, next) => {
  try {
    const token = extractTokenFromHeaderAuthorization(req);
    const payload = jwt.verify(token, SECRET_JWT);
    if (payload) {
      const user = await Users.findById(payload._id);
      //* add user to the request object
      req.user = user;
      next();
    } else {
      let err = new Error("UnAuthorized User");
      err.statusCode = 401;
      return next(err);
    }
  } catch (err) {
    return next(err);
  }
};

//* check if the current user isAdmin
//* we pass first by is authenticated
//* so we have req.user object
const verifyAdmin = async (req, res, next) => {
  try {
    const { isAdmin, role } = await Users.findById(req.user._id);
    if (role === UserRole.ADMINISTRATION) {
      next();
    } else {
      let err = new Error("UnAuthorized , you're not an admin");
      err.statusCode = 401;
      return next(err);
    }
  } catch (err) {
    return next(err);
  }
};

//* extract token from this user
const extractTokenFromHeaderAuthorization = (req) => {
  const token = req.headers.authorization.split(" ")[1];
  return token;
};

//* create token
// const maxAge = 25 * 24 * 60 * 60;
const createToken = (_id) => {
  const token = jwt.sign({ _id }, SECRET_JWT, {
    expiresIn: JWT_EXPIRE_TIME,
  });
  return token;
};

module.exports = {
  extractTokenFromHeaderAuthorization,
  createToken,
  verifyUser,
  verifyAdmin,
};
