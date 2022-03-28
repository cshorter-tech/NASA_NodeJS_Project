const http = require("http");

const app = require("./app");

const {loadPlanetsData} = require("./models/planets.model");

// app.listen();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await loadPlanetsData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}..`);
  });
}

startServer();

// This set up is useful for Websockets for real time communication rather than HTTP
