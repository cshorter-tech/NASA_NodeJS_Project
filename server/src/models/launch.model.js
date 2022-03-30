// No / UID
// Mission name
// Rocket type
// Launch date
// Destination exoplanet
// Customers

// Historical Missions - Success
// Mission Status - Upcoming (T), History (F)

// Store launch in an object

// const launches = [];

const launches = new Map();

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customer: ["NASA", "Elon Musk", "ZTM"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);
launches.get(100); // For ex.. returns launch object

module.exports = {
  launches,
};
