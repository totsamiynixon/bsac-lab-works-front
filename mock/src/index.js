var initLabs = require("./labs");
var initSubjects = require("./subjects");
var initMaterials = require("./materials");
var initReports = require("./reports");

module.exports = {
  start: client => {
    initLabs(client);
    initSubjects(client);
    initMaterials(client);
    initReports(client);
  }
};
//TODO:Think about how to start with dev server and hot reload
