// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log("New ObjectID: ", obj);


MongoClient.connect("mongodb://localhost:27017/TodoApp", {useNewUrlParser: true}, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection("Todos").find({
  //   _id: new ObjectID('5bbc7d4930d6e3248cec867d')
  // }).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err)
  // });

  // db.collection("Todos").find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  //   // console.log(JSON.stringify(docs, undefined, 4));
  // }, (err) => {
  //   console.log("Unable to fetch todos", err)
  // });

  db.collection("Users").find({
    name: "Kevin Wong"
  }).count().then((count) => {
    console.log(`Total count Kevin Wong: ${count}`);
  }, (err) => {
    console.log("Unable to fetch user");
  });

  // client.close();
});