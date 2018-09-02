module.exports = client => {
  client
    .mockWithCallback(
      {
        method: "GET",
        path: "/api/reports/upload"
      },
      function(request) {
        var response = {
          statusCode: 200
        };
        return response;
      },
      {
        unlimited: true
      }
    )
    .then(
      function(result) {
        console.log("Mocking Subjects");
      },
      function(error) {
        // handle error
      }
    );
};

const subjects = [
  { name: "Аэрокосмическое приборостроение", id: 5 },
  { name: "ЦиМПУ", id: 1 },
  { name: "Проектирование зданий и сооружений", id: 2 },
  { name: "Судостроение", id: 3 },
  { name: "Химические технологии и материаловедение", id: 4 },
  { name: "Биомедицинское приборостроение", id: 5 }
];
