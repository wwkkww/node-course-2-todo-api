const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");


//remove all
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: "5bc4a6d58cae9b669c1eeacf"}).then((result) => {
//   console.log()
// });

Todo.findByIdAndRemove("5bc4a6d58cae9b669c1eeacf").then((todo) => {
  console.log(todo);
});