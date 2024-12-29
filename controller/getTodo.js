//import th model
const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
  try {
    //fetch all item from DB
    const todos = await Todo.find({});
    //response
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire Todo data is fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "something went wrong in fetching all list",
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    //extract item by id
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No data Found with given id",
      });
    }
    res.status(200).json({
      success: true,
      message: `Data is found by given id: ${id}`,
      data: todo,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};
