const {launches} = require("../../models/launch.model");

// Connect launches to values via iterator

function getAllLaunches(req, res) {
  return res.status(200).json(Arrary.from(launches.values()));
}

module.exports = {
  getAllLaunches,
};
