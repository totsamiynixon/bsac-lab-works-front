module.exports = server => {
    server.get("/users/register", (req, res) => {
        res.contentType("application/json");
        res.status(200);
        res.json({
            Group: req.query.Group,
            FullName: req.query.FullName
        });
        res.send();
        // window.localStorage.setItem('newUser', "true");

        // let newUser = JSON.parse(opts.body);
        // let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
        //
        // if (duplicateUser) {
        //     reject('Username "' + newUser.username + '" is already taken');
        // }
        //
        // newUser.id = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
        // users.push(newUser);
        // localStorage.setItem('users', JSON.stringify(users));
        //
        // resolve({ ok: true, text: () => Promise.resolve() });

    });
};