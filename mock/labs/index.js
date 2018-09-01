module.exports = client => {
  client
    .mockAnyResponse({
      httpRequest: {
        method: "GET",
        path: "/api/labs"
      },
      httpResponse: {
        statusCode: 200,
        body: JSON.stringify(rows)
      },
      times: {
        unlimited: true
      }
    })
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
function createData(name, state) {
  id += 1;
  return { id, name, state };
}

const rows = [
  createData("Моделирование цифровых устройств", "Защищена"),
  createData("Синтез логических схем", "Отчет проверяется"),
  createData("Исследование работы шифраторов и дешифраторов", "Выполнил"),
  createData(
    "Исследование работы мультиплексоров и демультиплексоров",
    "Допущен к выполнению"
  ),
  createData("Исследование триггеров", "Не допущен"),
  createData("Исследование регистров памяти и регистров сдвига", "Не доступна")
];
