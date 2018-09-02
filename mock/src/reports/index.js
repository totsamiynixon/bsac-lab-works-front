module.exports = client => {
  client.mockWithCallback(
    {
      method: "GET",
      path: "/api/reports",
      queryStringParameters: {
        labId: ["\\d+"]
      }
    },
    function(request) {
      var response = {
        statusCode: 200,
        body: JSON.stringify(getReports(request.queryStringParameters.labId))
      };
      return response;
    },
    {
      unlimited: true
    }
  );
  client.mockWithCallback(
    {
      method: "POST",
      path: "/api/reports/upload",
      queryStringParameters: {
        labId: ["\\d+"]
      },
      headers: {
        "Content-Type": ["multipart/form-data"]
      }
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
  );
};

function getReports(labId) {
  return (
    reports
      .sort(function() {
        return 0.5 - Math.random();
      })
      .slice(0, 3),
    map(item => {
      item.labId = labId;
      return item;
    })
  );
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
