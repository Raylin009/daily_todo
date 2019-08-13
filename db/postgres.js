const getAllList = (req, res, db) => {
  // db.select('*').from('lists')
  db.select().table('lists').orderBy('date', 'asc')
    .then(data => res.send(data))
    .catch(err => console.log(`getList method err: ${err}`));
};

const getListById = (req, res, db) => {
  db('lists').where({ id: 12345 }).select('name')
    .then(data => res.send(data))
    .catch(err => console.log(`getList method err: ${err}`));
};

const getItemsByListId = (req, res, db) => {
  db.select().table('items').where({ listid: req.params.id })
    .then(data => res.send(data))
    .catch(err => console.log(`getItemsByListId method err: ${err}`));
};

const addList = (req, res, db) => {
  db('lists').insert({ id: 5678, name: 'test addList' })
    .then(data => console.log(data))
    .catch(err => console.log(`addList method err: ${err}`));
};

// const initDailyList = (req, res, db) => {
  
// }

module.exports = {
  getAllList,
  addList,
  getListById,
  getItemsByListId,
};
