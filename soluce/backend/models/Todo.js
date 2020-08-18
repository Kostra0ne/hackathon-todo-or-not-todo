const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: String,
  priority: Number,
  is_done: {
      type: Boolean,
      default: false
  },
  list: {
    type: Schema.Types.ObjectId,
    ref: "TodoList",
  },
  created: Date
});

const TodoModel = mongoose.model("Todo", todoSchema);

module.exports = TodoModel;
