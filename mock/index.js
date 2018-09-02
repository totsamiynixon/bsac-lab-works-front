var mockserver = require("mockserver-node");
var mockServerClient = require("mockserver-client").mockServerClient;
var starter = require("./src/index").start;
const nodemon = require("nodemon");

mockserver
  .start_mockserver({
    serverPort: 1080,
    proxyPort: 1090,
    systemProperties: "-Dmockserver.enableCORSForAllResponses=true"
  })
  .then(function() {
    var client = mockServerClient("localhost", 1080);
    starter(client);
    nodemon({
      ext: "js json",
      watch: [__dirname + "/src"],
      stdout: false,
      readable: false
    }).on("restart", function() {
      client.reset().then(succes => starter(client));
    });
  });
process.once("SIGINT", function() {
  process.exit(1);
});
//TODO:Think about how to start with dev server and hot reload
