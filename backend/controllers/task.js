const taskModel = require("../models/tasks");

const createTaskModel = async (req, res) => {
  try {
    const { title, date, time } = req.body;
    const createTask = await taskModel.create({
      title,
      date,
      time,
    });
    res.status(200).send({
      message: "Task added sucessfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};

const displayTaskModel = async (req, res) => {
  try {
    const taskLists = await taskModel.find({});
    res.status(200).send({
      message: taskLists,
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
const deleteTaskModel = async (req, res) => {
  try {
    const { id } = req.params;
    const getTask = await taskModel.findByIdAndDelete(id);
    if (!getTask) {
      return res.send(404).send({
        message: "Can't find task",
        success: false,
      });
    }

    res.status(200).send({
      message: "Task deleted successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(501).send({
      message: "server error",
      success: false,
    });
  }
};
module.exports = { createTaskModel, displayTaskModel, deleteTaskModel };
