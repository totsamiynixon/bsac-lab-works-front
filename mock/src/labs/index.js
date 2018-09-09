module.exports = server => {
  server.get("/api/labs", (req, res) => {
    console.log(req, res);
    res.contentType("application/json");
    if (!Number.isInteger(req.query.subjectId)) {
      res.status(400);
      return;
    }
    res.status(200);
    res.json(rows.filter(f => f.subjectId == req.query.subjectId));
  });
};

let id = 0;
function createData(name, state, subjectId) {
  id += 1;
  return { id, name, state, subjectId };
}

const rows = [
  createData("Моделирование цифровых устройств", "Защищена", 1),
  createData("Синтез логических схем", "Отчет проверяется", 1),
  createData("Исследование работы шифраторов и дешифраторов", "Выполнил", 1),
  createData(
    "Исследование работы мультиплексоров и демультиплексоров",
    "Допущен к выполнению",
    1
  ),
  createData("Исследование триггеров", "Не допущен", 2),
  createData(
    "Исследование регистров памяти и регистров сдвига",
    "Не доступна",
    2
  ),
  createData("Какая-то лаба", "Не доступна", 2)
];
