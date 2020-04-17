"use strict";

const express = require("express");
const os = require("os");

const HOST_NAME = os.hostname();

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();
app.get("/", async (req, res) => {
  const responseText = `From Host Name: ${HOST_NAME} --> ${new Date()}`;
  res.end(responseText);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
