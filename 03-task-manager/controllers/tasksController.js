const Task = require('../models/TasksModel');

const getAllTasks = async (req, res) => {
  // res.send('get all tasks');
  const task = await Task.find(req.body);
  res.status(200).json({ status: 'success', data: task });
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = async (req, res, next) => {
  try {
    const doc = await Task.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
