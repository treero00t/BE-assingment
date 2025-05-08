const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const  StringifyMapObj = obj =>  Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
app.get('/', (req, res) => res.send(StringifyMapObj(req.query)));
app.post('/', (req, res) => res.send(StringifyMapObj(req.body)));
app.put('/', (req, res) => res.send(StringifyMapObj(req.body)));
app.delete('/', (req, res) => res.send(StringifyMapObj(req.body)));

app.listen(port, () => console.log(`Server listening on port ${port}!`));