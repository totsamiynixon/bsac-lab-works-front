var initLabs = require("./labs");
var initSubjects = require("./subjects");
var initMaterials = require("./materials");
var initReports = require("./reports");
var initTests = require("./tests");
var initGroups = require("./groups");
var initNames = require("./names");
var initRegister = require("./users/register/register");

module.exports = {
    start: server => {
        initLabs(server);
        initSubjects(server);
        initMaterials(server);
        initReports(server);
        initTests(server);
        initGroups(server);
        initNames(server);
        initRegister(server);
    }
};
//TODO:Think about how to start with dev server and hot reload