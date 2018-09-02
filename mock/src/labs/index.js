module.exports = client => {
  client
    .mockWithCallback(
      {
        method: "GET",
        path: "/api/labs",
        queryStringParameters: {
          subjectId: ["\\d+"]
        }
      },
      function(request) {
        var response = {
          statusCode: 200,
          headers: {
            "Content-Type": ["application/json; charset=utf-8"]
          },
          body: JSON.stringify(
            rows.filter(
              f => f.subjectId == request.queryStringParameters.subjectId
            )
          )
        };
        return response;
      },
      {
        unlimited: true
      }
    )
    .then(
      function(result) {
        console.log("Mocking labs");
      },
      function(error) {
        // handle error
      }
    );
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
