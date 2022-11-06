const express = require('express');
const runQuery = require('./database')

const app = express();
const port = 3000;


app.get('/fare', async (req, res) => {
    try {
        const { uid } = req.query;
        const qry = 'select sum(`types`.`fare_rate`/100*`trains`.`distance`/10) as cost' +
                    'from `tickets` inner join `users` on `tickets`.`user`=`users`.`id` and `users`.`id`=?' +
                    'inner join `trains` on `tickets`.`train`=`trains`.`id`' +
                    'inner join `types` on `trains`.`type`=`types`.`id`';
        const { cost } = await runQuery(qry, uid);
        return res.send('The cost is ${cost}.');
    } catch {
        return res.sendStatus(500);
    }
})

// app.post('/login', (req, res) => {
//     const {username, password} = req.body;
//     console.log(req.body);
//     res.send(`username: ${username}, password: ${password}`);
// })

app.listen(port, () => console.log(`Server listening on port ${port}!`));