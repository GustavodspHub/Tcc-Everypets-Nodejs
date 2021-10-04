//importa o express
const express = require("express");

//importa o cors
const cors = require("cors");

//importa as rotas
const routes = require("./routes");

//cria a aplicação express
const app = express();

require("./database");

app.use(express.json());

app.use(cors());

app.use(routes);

module.exports = app;