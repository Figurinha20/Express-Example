const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config.json");

const app=express();
app.use(bodyParser.json());

app.listen(config.port, () => console.log(config.serverStartMessage, config.host, config.port));


