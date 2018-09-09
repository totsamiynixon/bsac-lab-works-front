var initLabs = require("./labs");
var initSubjects = require("./subjects");
var initMaterials = require("./materials");
var initReports = require("./reports");

module.exports = {
  start: server => {
    initLabs(server);
    initSubjects(server);
    initMaterials(server);
    initReports(server);
  }
};
//TODO:Think about how to start with dev server and hot reload
