var mockserver = require("mockserver-node");
var mockServerClient = require("mockserver-client").mockServerClient;

var initLabs = require("./labs");
var initSubjects = require("./subjects");
var initMaterials = require("./materials");

const start = () => {
  mockserver
    .start_mockserver({
      serverPort: 1080,
      proxyPort: 1090,
      systemProperties: "-Dmockserver.enableCORSForAllResponses=true"
    })
    .then(function() {
      var client = mockServerClient("localhost", 1080);
      initLabs(client);
      initSubjects(client);
      initMaterials(client);
    });
};
start();

//TODO:Think about how to start with dev server and hot reload
