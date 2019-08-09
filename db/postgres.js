const getList = (req, res, db) => {
  db.select('*').from('lists')
    .then(data => {res.send(data)})
    .catch(err => {console.log(`getList methid err: ${err}`)})
};

module.exports = {
  getList,
};
