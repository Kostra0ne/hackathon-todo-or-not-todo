require("dotenv").config();
require("./../config/mongo");

const todoLists = [
  {
    name: "list 1",
  },
  {
    name: "list 2",
  },
];

const TodoListModel = require("./../models/TodoList");

(async function () {
  try {
    try {
      await TodoListModel.collection.drop();
      const res = await TodoListModel.create(todoLists);
      console.log(res.length + " todoLists created in database");
    } catch (err) {
      if (err.code === 26) {
        console.log(
          "namespace %s not found, creating collection ",
          TodoListModel.collection.name
        );
        const res = await TodoListModel.create(todoLists);
        console.log(res.length + " todoLists created in database");
      } else {
        throw e;
      }
    }
  } catch (e) {
    console.error(e);
  }
})();
