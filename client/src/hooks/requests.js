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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
    });
  } catch (err) {
    console.log(err);
    return {
      okay: false,
    };
  }
}

// Delete launch with given ID.
async function httpAbortLaunch(id) {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: "delete",
    });
  } catch (err) {
    console.log(err);
    return {
      okay: false,
    };
  }
  httpGetLaunches();
}

export {httpGetPlanets, httpGetLaunches, httpSubmitLaunch, httpAbortLaunch};
