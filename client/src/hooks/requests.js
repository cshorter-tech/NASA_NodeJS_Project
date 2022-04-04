const API_URL = "http://localhost:8000";

// Load planets and return as JSON
async function httpGetPlanets() {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
}

// Load launches, sort by flight number, return as JSON  also testing the funciton to confirm the flight number is the next number in sorted fashion.
async function httpGetLaunches() {
  const response = await fetch(`${API_URL}/launches`);
  // return await response.json();
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

// Submit given launch data to launch system. (GET - Default, POST - Option Object + Pass In Data)
async function httpSubmitLaunch(launch) {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: "post",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    return {
      okay: false,
    };
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch};
