module.exports = server => {
  server.get("/api/subjects", (req, res) => {
    res.contentType("application/json");
    res.status(200);
    res.json(subjects);
    res.send();
  });
};

const subjects = [
  { name: "ЦиМПУ", id: 1 },
  { name: "Проектирование зданий и сооружений", id: 2 },
  { name: "Судостроение", id: 3 },
  { name: "Химические технологии и материаловедение", id: 4 },
  { name: "Биомедицинское приборостроение", id: 5 }
];
