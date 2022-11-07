const express = require('express');
const { runQuery } = require('./database')

const app = express();
const port = 3000;


app.get('/fare', async (req, res) => {
    try {
        const { uid } = req.query;
        const qry = 'select sum(`types`.`fare_rate`/100*`trains`.`distance`/10) as `cost`' +
            'from `tickets` inner join `users` on `tickets`.`user`=`users`.`id` and `users`.`id`=?' +
            'inner join `trains` on `tickets`.`train`=`trains`.`id`' +
            'inner join `types` on `trains`.`type`=`types`.`id`';
        const { cost } = (await runQuery(qry, uid))[0];
        return res.send(`The cost is ${cost}.`);
    } catch (err) {
        console.log(err);
        return res.sendStatus(500);
    }
});

app.get('/train/status', async (req, res) => {
    try {
        const { tid } = req.query;
        const sql = 'select count(*) as soldout, max_seats as max from tickets ' +
                    'inner join trains on trains.id = tickets.train and trains.id = ? ' +
                    'inner join types on trains.type = types.id';
        const { soldout, max } = (await runQuery(sql, tid))[0];
        const available = soldout < max;
        if(available) {
            return res.send(`it is available.`);
        }
        else {
            return res.send(`it is not available.`);
        }
    } catch (err) {
        console.error(err);
        return res.sendStatus(500);
    }
});


app.listen(port, () => console.log(`Server listening on port ${port}!`));