const express = require('express');
const db = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: '',
    password: '',
    database: 'dailytodo',
  },
});

const bodyParser = require('body-parser');

const app = express();
const port = 3101;
const distPath = '/Users/raylin/Documents/Personal_Project/daily_todo/dist';
const pg = require('../db/postgres.js');

app.use(bodyParser.json());
app.use(express.static(distPath));

app.get('/lists/all', (req, res) => pg.getAllList(req, res, db));
app.get('/l/:id', (req, res) => pg.getListById(req, res, db));

app.get('/items/')

app.get('/testNewFunc', (req, res) => pg.getListById(req, res, db));

app.get('/list:id', (req, res) => (console.log(req.params)));
app.post('/list:id', (req, res) => pg.addList(req, res, db));

app.listen(port, () => console.log(`listening on port: ${port}`));
