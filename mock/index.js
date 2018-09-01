var mockserver = require("mockserver-node");
var mockServerClient = require("mockserver-client").mockServerClient;

var initLabs = require("./labs");

const start = () => {
  mockserver
    .start_mockserver({
      serverPort: 1080,
      proxyPort: 1090
    })
    .then(function() {
      var client = mockServerClient("localhost", 1080);
      initLabs(client);
    });
};
start();
