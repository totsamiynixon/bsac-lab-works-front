module.exports = client => {
  client
    .mockWithCallback(
      {
        method: "GET",
        path: "/api/subjects"
      },
      function(request) {
        var response = {
          statusCode: 200,
          headers: {
            "Content-Type": ["application/json; charset=utf-8"]
          },
          body: JSON.stringify(subjects)
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
  { name: "ЦиМПУ", id: 1 },
  { name: "Проектирование зданий и сооружений", id: 2 },
  { name: "Судостроение", id: 3 },
  { name: "Химические технологии и материаловедение", id: 4 },
  { name: "Биомедицинское приборостроение", id: 5 }
];
