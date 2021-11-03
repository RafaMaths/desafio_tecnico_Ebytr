const {connection} = require('./connection');

const createTask = async({task}) => {
  const taskCollection = await connection();
  const {insertedId: id} = taskCollection.collection('tasks').insertOne({task});
  return {task, id}
};

const getAllTask = async () => {
  const taskCollection = await connection();
  const dbConnect = taskCollection.collection('tasks').find().toArray();
  return dbConnect ;
};

const getTaskById = async(id) => {
  const taskCollection = await connection();
  const dbConnect = taskCollection.collection('tasks').findOne({ _id: ObjectId(id) });
  return dbConnect;
};

module.exports = {
  createTask,
  getAllTask,
  getTaskById
}