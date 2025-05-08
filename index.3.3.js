const express = require('express');
const app = express();
const port = 3000;

const factorial = number => {
    if (number === 0 ) return 1;
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    return result;
};
app.get('/factorial', (req, res) => {
    const number = req.query.number;
    res.redirect(`/factorial/${number}`);
});

app.get('/factorial', (req, res) => {
    const number = req.query.number;
    res.redirect(`/factorial/${number}`);
});
app.get('/factorial/:number', (req, res) => {
    const n = parseInt(req.params.number);
    const result = factorial(n);
    res.send(`${result}`);
  });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});