module.exports = server => {
  server.get("/api/materials", (req, res) => {
    if (!Number.isInteger(Number.parseInt(req.query.labId))) {
      res.status(400);
      res.send();
      return;
    }
    res.contentType("application/json");
    res.status(200);
    res.json(materials.filter(f => f.labId == req.query.labId));
    res.send();
  });
};

const materials = [
  { title: "Практикум 1 ", id: 1, labId: 1, link: "" },
  { title: "Практикум 2", id: 2, labId: 1, link: "" },
  { title: "Практикум 3", id: 3, labId: 1, link: "" },
  { title: "Руководство 1", id: 4, labId: 5, link: "" },
  {
    title: "Руководство 2",
    id: 5,
    labId: 5,
    link: ""
  },
  { title: "Справочная информация", id: 6, labId: 5, link: "" }
];
