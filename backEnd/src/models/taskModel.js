const { ObjectId } = require('mongodb');
const {connection} = require('./connection');

const createTask = async({task, statusTask}) => {
  const taskCollection = await connection();
  const {insertedId: id} = taskCollection.collection('tasks').insertOne({task, statusTask});
  return {task, statusTask, id}
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

const updateTask = async ({task, statusTask}, id) => {
  if (!ObjectId.isValid(id)) return null;

  const taskCollection = await connection();
  const dbConnect = taskCollection.collection('tasks').updateOne({_id: ObjectId(id)},
  {
    $set: {task, statusTask}
  });
  
  return {
    task,
    statusTask,
    id
  };
};

module.exports = {
  createTask,
  getAllTask,
  getTaskById,
  updateTask
}