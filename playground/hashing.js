const {SHA256} = require("crypto-js");
const jwt = require("jsonwebtoken");

var data = {
  id: 20
};

var token = jwt.sign(data, "123abc");
console.log(token);
var decoded = jwt.verify(token, "123abc");
console.log("decoded", decoded);



// var message = "Test a crypto 12345";
// var hash = SHA256(message).toString();
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// var data = {
//   id: 4
// };

// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + "secretkey").toString()
// }
// // token.data.id = 5
// // token.hash = SHA256(JSON.stringify(token.data)).toString();

// //JSON Web Token (JWT)
// var resultHash = SHA256(JSON.stringify(token.data) + "secretkey").toString();
// if (resultHash === token.hash) {
//   console.log("Data was not changed");
// } else {
//   console.log("Warning! Data was changed");
// }