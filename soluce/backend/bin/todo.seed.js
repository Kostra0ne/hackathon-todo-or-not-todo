require("dotenv").config();
require("./../config/mongo");

const todos = [
    {
        text: "code a lot",
        priority: 1,
        is_done: false,
        list: "foo"
    },
    {
        text: "code more",
        priority: 2,
        is_done: false,
        list: "foo"
    },
    {
        text: "code again",
        priority: 3,
        is_done: false,
        list: "foo"
    },
    {
        text: "code for fun",
        priority: 2,
        is_done: false,
        list: "foo"
    },
    {
        text: "have some rest",
        priority: 1,
        is_done: true,
        list: "foo"
    },
    {
        text: "meet some friends",
        priority: 1,
        is_done: true,
        list: "foo"
    },
]
const TodoModel = require("./../models/Todo");

(async function () {
  try {
    try {
      await TodoModel.collection.drop();
      const res = await TodoModel.create(todos);
      console.log(res.length + " todos created in database");
    } catch (err) {
      if (err.code === 26) {
        console.log(
          "namespace %s not found, creating collection ",
          TodoModel.collection.name
        );
        const res = await TodoModel.create(users);
        console.log(res.length + " todos created in database");
      } else {
        throw e;
      }
    }
  } catch (e) {
    console.error(e);
  }
})();
