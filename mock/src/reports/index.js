module.exports = server => {
  server.get("/api/reports", (req, res) => {
    console.log(req.query);
    let labId = Number.parseInt(req.query.labId);
    if (!Number.isInteger(labId)) {
      res.status(400);
      res.send("Wrong query");
      return;
    }
    res.contentType("application/json");
    res.status(200);
    res.json(getReports(labId));
    res.send();
  });

  server.post("/api/reports/upload", (req, res) => {
    console.log(req, res);
    res.status(200);
  });
};

function getReports(labId) {
  return reports
    .sort(function() {
      return 0.5 - Math.random();
    })
    .slice(0, 3)
    .map(item => {
      item.labId = labId;
      return item;
    });
}

const reports = [
  { title: "Отчет 1", id: 1, url: "", labId: 0, type: 1 },
  {
    title: "Отчет 2",
    id: 2,
    url: "",
    labId: 0,
    type: 1
  },
  { title: "Отчет 3", id: 3, url: "", labId: 0, type: 1 },
  {
    title: "Типовой 1",
    id: 4,
    url: "",
    labId: 0,
    type: 2
  },
  { title: "Типовой 2", id: 5, url: "", labId: 0, type: 2 }
];
