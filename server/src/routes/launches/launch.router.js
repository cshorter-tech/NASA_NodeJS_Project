const express = require("express");

const {httpGetAllLaunches, httpAddNewLaunch} = require("./launch.controller");

const launchesRouter = express.Router();

// Matches path where the router has been routed.. if / then you need /launch.. if /launch then you go with root.. '/'

launchesRouter.get("/", httpGetAllLaunches);

launchesRouter.post("/", httpAddNewLaunch);

module.exports = launchesRouter;
