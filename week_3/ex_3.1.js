const express = require('express');

const port = '3000';
const app = express();

app.use(express.urlencoded({ extended: true }));
const stringify = obj => Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

app.get('/', (req, res) => {
    // console.log(req.query);
    // console.log(req.body);
    // console.log(Object.values(req.query));
    // console.log(stringify(req.query));
    res.send('[GET]' + stringify(req.query));
})

app.post('/', (req, res) => {
    // console.log(req.query);
    // console.log(req.body);
    // console.log(Object.values(req.query));
    // console.log(stringify(req.body));
    res.send('[POST]' + stringify(req.body));
})

app.put('/', (req, res) => {
    res.send('[PUT]' + stringify(req.body));
})

app.delete('/', (req, res) => {
    res.send('[DELETE]' + stringify(req.body));
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))