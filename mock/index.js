var starter = require("./src/index").start;
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Configure routes
starter(server);

var instance = server.listen(1080, () => {
  console.log("JSON Server is running");
});

process.once("SIGINT", function() {
  process.exit(1);
});
//TODO:Think about how to start with dev server and hot reload
