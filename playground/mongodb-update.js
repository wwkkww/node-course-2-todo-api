const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB server");
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

  // db.collection("Todos").findOneAndUpdate({
  //   _id: new ObjectID("5bbcbe6a9069fe625421c0fa")
  // }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection("Users").findOneAndUpdate({
    _id: new ObjectID("5bbc7f22b8eab81754f9bf37")
  }, {
      $set: {
        name: "Kevin"
      },
      $inc: {
        age: 10
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    // client.close();
});