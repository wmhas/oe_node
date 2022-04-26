require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var faker = require("faker");

 const uri =  process.env.DB_URL
 
let firstName = faker.name.firstName();
let lastName = faker.name.lastName();

console.log(`TEST FAKER: ${firstName} ${lastName}`);

console.log(process.env.USER_ID + uri);

 
// MongoClient.connect(uri, function(err, db) {
//   if(!err) {
//     console.log("We are connected");

//     var dbo = db.db("osc1");
//     var myobj = { name: "Company oe 1 ", address: "CYBERJAYA" };
//     dbo.collection("customers").insertOne(myobj, function(err, res) {
//       if (err) throw err;
//       console.log("1 document inserted");
//       db.close();
//     });
// };
// });
 