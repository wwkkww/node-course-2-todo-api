const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  //deleteMany
  // db.collection("Todos").deleteMany({text: "Eat lunch"}).then((result) => {
  //   console.log(result.result);
  // });

  //deleteOne
  // db.collection("Todos").deleteOne({text: "Eat lunch"}).then((result) => {
  //   console.log(result);
  // });


  //findOneAndDelete
  // db.collection("Todos").findOneAndDelete({completed: false}).then((res) => {
  //   console.log(res);
  // });


  // db.collection("Users").deleteMany({name: "Kevin Wong"}).then((res) => {
  //   console.log(res.result);
  // });

  db.collection("Users").findOneAndDelete({_id: new ObjectID("5bbcc1e09069fe625421c1fe")}).then((res) => {
    console.log(JSON.stringify(res, undefined, 4));
  });

  //client.close();

});