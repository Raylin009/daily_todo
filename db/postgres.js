const getAllList = (req, res, db) => {
  // db.select('*').from('lists')
  db.select().table('lists').orderBy('date', 'desc')
    .then(data => res.send(data))
    .catch(err => console.log(`getList method err: ${err}`));
};

const getListById = (req, res, db) => {
  db('lists').where({ id: 12345 }).select('name')
    .then(data => res.send(data))
    .catch(err => console.log(`getList method err: ${err}`));
};

const getItemsByListId = (req, res, db) => {
  db.select()
    .table('items')
    .where({ listid: req.params.id })
    .orderBy('create_at', 'asc')
    .then(data => res.send(data))
    .catch(err => console.log(`getItemsByListId method err: ${err}`));
};

const addList = (req, res, db) => {
  db('lists').insert({ id: 5678, name: 'test addList' })
    .then(data => console.log(data))
    .catch(err => console.log(`addList method err: ${err}`));
};

const addItemToList = (req, res, db) => {
  db('items').insert(req.body)
    .then(data => res.send(data))
    .catch(err => console.log(err));
};

const deleteTodoItem = (req, res, db) => {
  db('items').where('id', req.params.id).del()
    .then(data => res.end())
    .catch(err => console.log(err));
};

const toggleComplete = (req, res, db) => {
  db('items').where('id', req.params.id).update(req.body)
    .then(data => res.end())
    .catch(err => console.log(err));
};

module.exports = {
  getAllList,
  addList,
  getListById,
  getItemsByListId,
  addItemToList,
  deleteTodoItem,
  toggleComplete,
};
