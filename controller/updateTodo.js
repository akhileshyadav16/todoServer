//import th model
const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById({ _id: id });

    const updated = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        completed: !todo.completed,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: todo,
      message: `update successfully in id:${id}`,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: err.message,
    });
  }
};
