const router = new require("express").Router();
const TodoModel = require("./../models/Todo");

router.get("/", async (req, res, next) => {
  try {
    const todos = await TodoModel.find();
    res.json(todos);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const todosByListId = await TodoModel.find({ list: req.params.id });
    res.json(todosByListId);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newTodo = await TodoModel.create(req.body);
    res.json(newTodo);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const removedTodo = await TodoModel.findByIdAndRemove(req.params.id);
    res.json(removedTodo);
  } catch (err) {
    next(err);
  }
});

router.patch("/is-done/:id", async (req, res, next) => {
  try {
    const todoToUpdate = await TodoModel.findById(req.params.id);

    if (todoToUpdate) {
      todoToUpdate.is_done = !todoToUpdate.is_done;
      const updatedTodo = await todoToUpdate.save({new: true});
      res.json(updatedTodo);
    } else {
      res.json("unknown todo");
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
