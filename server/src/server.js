const fs = require('fs');
const http = require('http');
const { mongoConnect } = require('./services/mongo');
const app = require('./app');

const { loadPlanetsData } = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  await loadPlanetsData();
  
  server.listen(PORT, () => {
    console.log(`Running on port ${PORT}...`);
  });
}

startServer();
