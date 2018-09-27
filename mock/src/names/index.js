module.exports = server => {
    server.get("/api/names", (req, res) => {
        if (!req.query.groupId) {
            res.contentType("application/json");
            res.status(200);
            res.json(names);
            res.send();
        } else if (!Number.isInteger(Number.parseInt(req.query.groupId))) {
            res.status(400);
            res.send();
        } else {
            res.contentType("application/json");
            res.status(200);
            res.json(names.filter(f => f.groupId == req.query.groupId));
            res.send();
        }
    });
};

let id = 0;
function createData(name, groupId) {
    id += 1;
    return { id, name, groupId };
}

const names = [
    createData("Ярошевич Владилен Миронович", 1),
    createData("Комзина Александра Семеновна", 1),
    createData("Борисюка Дина Казимировна ", 1),
    createData("Громова Галина Олеговна", 2),
    createData("Другаков Семен Егорович ", 2),
    createData("Ганичев Матвей Игнатиевич ", 2),
    createData("Мартынов Фадей Всеволодович ", 3),
    createData("Яромеева Эвелина Данииловна ", 3),
    createData("Капица Ариадна Трофимовна ", 3),
    createData("Моисеева Тамара Иларионовна", 4),
    createData("Кураев Гаврила Никанорович ", 4),
    createData("Хорошилова Кира Анатолиевна ", 4),
    createData("Чичерина Майя Игоревна ", 5),
    createData("Бочко Диана Елизаровна ", 5),
    createData("Дудченко Татьяна Никитевна", 5)
];
