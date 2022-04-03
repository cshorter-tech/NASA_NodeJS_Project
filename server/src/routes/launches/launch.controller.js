const {getAllLaunches, addNewLaunch} = require("../../models/launch.model");

// Connect launches to values via iterator

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;

  launch.launchDate = new Date(launch.launchDate);
  addNewLaunch(launch);
  return res.status(201).json(launch); //Gives response and data..
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
