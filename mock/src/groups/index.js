module.exports = server => {
    server.get("/api/groups", (req, res) => {
        res.contentType("application/json");
        res.status(200);
        res.json(groups);
        res.send();
    });
};

const groups = [
    { name: "СП111", id: 1 },
    { name: "ЛК222", id: 2 },
    { name: "ТР333", id: 3 },
    { name: "ЭП148", id: 4 },
    { name: "COPS102", id: 5 }
];