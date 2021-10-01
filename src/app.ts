const express = require("express");
require("./database");
const routes = require("/routes");

const pegarApp = express();

app.use(express.json());

app.use(routes);

module.exports = app;