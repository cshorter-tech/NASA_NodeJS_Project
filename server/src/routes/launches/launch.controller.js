const {getAllLaunches} = require("../../models/launch.model");

// Connect launches to values via iterator

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

module.exports = {
  httpGetAllLaunches,
};
