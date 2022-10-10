const express = require('express');

const port = '3000';
const app = express();

const factorial = num => {
    let ret = 1;
    for(let i = 0; i < num; i++) {
        ret *= (i + 1);
    }

    return ret;
}

app.get('/factorial', (req, res) => {
    const { number } = req.query;
    res.redirect(`/factorial/${number}`);
})

app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
    const parsed = parseInt(number);
    res.send(`${factorial(parsed)}`);
})

app.listen(port, () => console.log(`Server listening on port ${port}!`))