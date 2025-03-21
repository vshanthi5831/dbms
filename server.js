const jsonServer = require('json-server');
const path = require('path');
const cors = require('cors'); // Import cors

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src', 'db.json')); // Make sure the path to db.json is correct
const middlewares = jsonServer.defaults();

// Enable CORS
server.use(cors());
server.use(middlewares);
server.use(router);

server.listen(3001, () => {
  console.log('JSON Server is running on http://localhost:3001');
});