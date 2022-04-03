// Store launch in an object

// const launches = [];

// Javascript Map Object -

const launches = new Map();

// No / UID
// Mission name
// Rocket type
// Launch date
// Destination exoplanet
// Customers
// Booleans & Other Values
// Historical Missions - Success
// Mission Status - Upcoming (T), History (F)

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

// Launch.Set(Key, Value)

launches.set(launch.flightNumber, launch);

launches.get(100); // For ex.. returns launch object

function getAllLaunches() {
  return Array.from(launches.values());
}

// Export launches Map() <-- No Longer

module.exports = {
  getAllLaunches,
};
