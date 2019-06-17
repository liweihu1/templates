const expressWinston = require("express-winston");
const logger = require("./config/logger/Logger");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
require("dotenv").config();

const app = express();

// Environment variables
const port = process.env.NODE_PORT;
const host = process.env.NODE_HOST;
const mongoDB = process.env.MONGO_DB;
const mongoURI = process.env.MONGO_URI;

// Connect database
mongoose
  .connect(mongoURI + mongoDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => logger.info("MongoDB connected"))
  .catch(error => logger.error(error.stack));

// Middleware
app.use(bodyparser.json());
app.use(expressWinston.logger(logger));

// Global error handler
// eslint-disable-next-line
app.use((error, req, res, next) => {
  logger.error(error.stack);
  return res.status(500).json({
    message: "An unexpected error occurred"
  });
});

// Not found
app.all("*", (req, res) =>
  res.status(404).json({
    message: "Resource Not Found"
  })
);

app.use("/basic", require("./routes/BasicRouter"));

// Start service
app.listen(port, () => {
  logger.info(`Service: listening on http://${host}:${port}`);
});
