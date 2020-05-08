"use strict";

const express = require("express");
const os = require("os");
const rp = require("request-promise-native");

const HOST_NAME = os.hostname();
const SERVICE_NAME = process.env.SERVICE_NAME || "UNKNOWN_SERVICE_NAME";
const ENDPOINT_URL =
  process.env.ENDPOINT_URL || "http://worldtimeapi.org/api/ip";

const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const app = express();
app.get("/", async (req, res) => {
  let result;
  try {
    result = await rp(ENDPOINT_URL);
  } catch (err) {
    result = err;
  }

  const responseText = `Service: ${SERVICE_NAME}, Host: ${HOST_NAME} --> ${result}\n`;
  res.end(responseText);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
