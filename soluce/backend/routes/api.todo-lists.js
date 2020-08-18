const router = new require("express").Router();
const TodoListModel = require("./../models/TodoList");

router.get("/", async (req, res, next) => {
  try {
    const todoLists = await TodoListModel.find();
    res.json(todoLists);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const users = await TodoListModel.create({
      name: req.body.name,
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
