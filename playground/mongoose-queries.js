const { ObjectID } = require("mongodb");

const { mongoose } = require("./../server/db/mongoose");
const { Todo } = require("./../server/models/todo");
const { User } = require("./../server/models/user");

var id = "5bbdecafcd9caa31d8ea384b";

// if (!ObjectID.isValid(id)) {
//   console.log("ID is not valid");
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log("Find Todos", todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log("findOne", todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log("Id not found");
//   }
//   console.log("findById", todo);
// }).catch((e) => console.log(e.message));

User.findById(id).then((user) => {
  if (!user) {
    return console.log("userId not found");
  }
  console.log(JSON.stringify(user, undefined, 4));
}, (e) => {
  console.log(e);
});