let faker = require("faker");

module.exports = server => {
    server.get("/api/tests", (req, res) => {
        console.log(req.query);
        let labId = Number.parseInt(req.query.labId);
        if (!Number.isInteger(labId)) {
            res.status(400);
            res.send("Wrong query");
            return;
        }
        res.contentType("application/json");
        res.status(200);
        res.json(getTests(labId));
        res.send();
    });
    server.get("/api/tests/:testId", (req, res) => {
        console.log(req.params);
        let testId = Number.parseInt(req.params.testId);
        if (!Number.isInteger(testId)) {
            res.status(400);
            res.send("Wrong query");
            return;
        }
        res.contentType("application/json");
        res.status(200);
        res.json(getTest(testId));
        res.send();
    });
};

function getTests(labid) {
    let labs = [];
    let limit = Math.random() * 10;
    for (let i = 0; i < limit; i++)
        labs.push({
            name: faker.name.jobTitle(),
            id: i + 1,
            labId: labid,
            status: faker.random.arrayElement([1, 2])
        });
    return labs;
}

function getTest(testId) {
    let test = {
        id: testId,
        questions: []
    };
    let limit = Math.random() * 10;
    for (let i = 0; i < limit; i++) {
        let question = {
            title: faker.lorem.sentence(),
            id: i + 1,
            testId: testId,
            answers: []
        };
        test.questions.push(question);
        let limit = Math.random() * 10;
        for (let j = 0; j < limit; j++) {
            question.answers.push({
                title: faker.lorem.sentence(),
                id: i * 10 + (j + 1),
                questionId: question.id
            });
        }
    }
    return test;
}