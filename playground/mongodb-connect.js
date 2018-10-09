// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log("New ObjectID: ", obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }

  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Error inserting data: ", err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: "Kevin Wong",
  //   age: 35,
  //   location: "Kuala Lumpur"
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Error inserting user: ", err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  client.close();
});