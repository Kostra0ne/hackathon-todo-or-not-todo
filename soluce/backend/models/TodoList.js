const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  name: String,
});

const TodoListModel = mongoose.model("TodoList", todoListSchema);

module.exports = TodoListModel;
