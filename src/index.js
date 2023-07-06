const express = require("express");

const app = express();

app.use(express.json());

const userController = require("./controller/userController");

app.use("/", userController);

module.exports = app;
