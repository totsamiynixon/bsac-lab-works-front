module.exports = client => {
  client
    .mockWithCallback(
      {
        method: "GET",
        path: "/api/materials",
        queryStringParameters: {
          labId: ["\\d+"]
        }
      },
      function(request) {
        var response = {
          statusCode: 200,
          headers: {
            "Content-Type": ["application/json; charset=utf-8"]
          },
          body: JSON.stringify(
            materials.filter(
              f => f.labId == request.queryStringParameters.labId
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
        console.log("Mocking Materials");
      },
      function(error) {
        // handle error
      }
    );
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
