const express = require("express");

const {httpGetAllLaunches} = require("./launch.controller");

const launchesRouter = express.Router();

launchesRouter.get("/launches", httpGetAllLaunches);

module.exports = launchesRouter;
