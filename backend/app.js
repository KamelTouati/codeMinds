var express = require("express");
var path = require("path");
var logger = require("morgan");
const connectDB = require("./configs/db.config");
const MyResponse = require("./models/Response");
const { PORT } = require("./configs/environment.config");
const cors = require("cors");

var app = express();

//! connect to mongoDB
connectDB();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//! setup routes

app.get("/", (req, res, next) => {
  res.json(new MyResponse(true, "CodeMinds Api", null));
});

app.use("/auth", require("./routes/auth.routes"));
app.use("/admin", require("./routes/admin.routes"));
app.use("/announcement", require("./routes/announcement.routes"));
app.use("/anomaly", require("./routes/anomaly.routes.js"));
app.use("/chats", require("./routes/chats.routes.js"));

//! catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error("ROUTE_NOT_FOUND");
  err.statusCode = 404;
  next(err);
});

//! error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.statusCode = err.statusCode || 400;
  return res.json(new MyResponse(false, err.message));
});

app.listen(PORT, () => {
  console.log(`server starting on the post : ${PORT}`);
});
