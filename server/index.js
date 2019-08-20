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

// get all list
app.get('/lists/all', (req, res) => pg.getAllList(req, res, db));

// get list by id
app.get('/l/:id', (req, res) => pg.getItemsByListId(req, res, db));

// initciate daily list if not exists
app.post('/initList', (req, res) => pg.initDailyList(req, res, db));

// Add item
app.post('/addtask', (req, res) => pg.addItemToList(req, res, db));

// toggle complete
app.patch('/complete/:id', (req, res) => pg.toggleComplete(req, res, db));

// delete item
app.delete('/rm/:id', (req, res) => pg.deleteTodoItem(req, res, db));

app.listen(port, () => console.log(`listening on port: ${port}`));
