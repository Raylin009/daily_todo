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

// get today's list if exist aka initDailyList
app.get('/init/list', (req, res) => pg.getItemsByListId(req, res, db));

// add list

// delete List

// ---> change list name

// get items by list id

// Add item
app.post('/addtask', (req, res) => pg.addItemToList(req, res, db));
// change item

// delete item
app.delete('/rm/:id', (req, res) => pg.deleteTodoItem(req, res, db));

app.get('/testNewFunc', (req, res) => pg.getListById(req, res, db));

app.get('/list:id', (req, res) => (console.log(req.params)));
app.post('/list:id', (req, res) => pg.addList(req, res, db));

app.listen(port, () => console.log(`listening on port: ${port}`));
