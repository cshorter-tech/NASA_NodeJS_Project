// Store launch in an object

// const launches = [];

// Javascript Map Object -

const launches = new Map();

let latestFlightNumber = 100;

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
  flightNumber: 100, // caculate
  mission: "Kepler Exploration X", // user input
  rocket: "Explorer IS1", // user input
  launchDate: new Date("December 27, 2030"), // user input
  destination: "Kepler-442 b", // user input
  customer: ["NASA", "Elon Musk", "ZTM"], // standard input
  upcoming: true, // standard input until date past
  success: true, // standard input until date past where something goes wrong
};

// Launch.Set(Key, Value)

launches.set(launch.flightNumber, launch);

launches.get(100); // For ex.. returns launch object

function getAllLaunches() {
  return Array.from(launches.values());
}

// Create function to addNewLaunch that accepts 'launch' as the argugment which is added to the map / collection

function addNewLaunch(launch) {
  // launches.set(launch.flightNumber, launch);
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["NASA", "Elon Musk", "ZTM"],
      upcoming: true,
      success: true,
    })
  );
}

// Export launches Map() <-- No Longer

module.exports = {
  getAllLaunches,
  addNewLaunch,
};
