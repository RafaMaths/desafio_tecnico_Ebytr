const {connection} = require('./connection');

const getAll = async () => {
  const taskCollection = await connection();
  const dbConnect = taskCollection.collection('tasks').find().toArray();
  return dbConnect ;
};

module.exports = {
  getAll,
}