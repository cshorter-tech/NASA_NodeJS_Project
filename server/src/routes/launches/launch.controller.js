const {getAllLaunches, addNewLaunch} = require("../../models/launch.model");

// Connect launches to values via iterator

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpAddNewLaunch(req, res) {
  const launch = req.body;
  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.target
  ) {
    return res.status(400).json({
      error: "Missing required launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  if (isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: "Invalid launch date",
    });
  }
  // if (launch.launchDate.toString() === "Invalid Date") {
  //   return res.status(400).json({
  //     error: "Invalid launch date via toString",
  //   });
  // }
  addNewLaunch(launch);
  return res.status(201).json(launch); //Gives response and data..
}

module.exports = {
  httpGetAllLaunches,
  httpAddNewLaunch,
};
