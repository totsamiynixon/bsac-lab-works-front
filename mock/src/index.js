var initLabs = require("./labs");
var initSubjects = require("./subjects");
var initMaterials = require("./materials");
var initReports = require("./reports");
var initTests = require("./tests");

module.exports = {
  start: server => {
    initLabs(server);
    initSubjects(server);
    initMaterials(server);
    initReports(server);
    initTests(server);
  }
};
//TODO:Think about how to start with dev server and hot reload
