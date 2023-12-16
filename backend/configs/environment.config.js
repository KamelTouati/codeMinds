//! import .env
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
module.exports = {
  MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
  WEBSITE_URL: process.env.WEBSITE_URL,
  API_VERSION: process.env.API_VERSION,
  PORT: process.env.PORT || 3000,
  ADMIN_EMAIL: process.env.ADMIN_EMAIL, //currently used to send emails
  SECRET_JWT: process.env.SECRET_JWT,
  JWT_EXPIRE_TIME: process.env.JWT_EXPIRE_TIME,
  ACCESS_TOKEN_SECRET_KEY: process.env.ACCESS_TOKEN_SECRET_KEY,
  REFRESH_TOKEN_SECRET_KEY: process.env.REFRESH_TOKEN_SECRET_KEY,
  ACCESS_TOKEN_KEY_EXPIRE_TIME: process.env.ACCESS_TOKEN_KEY_EXPIRE_TIME,
  REFRESH_TOKEN_KEY_EXPIRE_TIME: process.env.REFRESH_TOKEN_KEY_EXPIRE_TIME,
  NODE_ENV: process.env.NODE_ENV || "development",
};
