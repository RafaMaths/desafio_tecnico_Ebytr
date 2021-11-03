const {connection} = require('./connection');

const createTask = async({task}) => {
  const taskCollection = await connection();
  const {insertedId: id} = taskCollection.collection('tasks').insertOne({task});
  return {task, id}
};

const getAll = async () => {
  const taskCollection = await connection();
  const dbConnect = taskCollection.collection('tasks').find().toArray();
  return dbConnect ;
};

module.exports = {
  getAll,
  createTask
}