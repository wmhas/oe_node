var MongoClient = require('mongodb').MongoClient;
//var faker = require("faker");
 
const uri = "mongodb://oeuser3:321ToughJob^@128.199.195.92:27017/osc1?retryWrites=true&w=majority";
 
 
// var randomName = faker.name.findName(); // Generates a random name
// var randomEmail = faker.internet.email(); // Generates a random email
// var randomProduct = faker.commerce.productName(); // Generates a random product name
// var randomCompany = faker.company.companyName(); // Will give back a random company name
// var randomCard = faker.helpers.createCard(); // It's output is a random contact card containing many properties


// for (i = 0; i < 20; i++) {
// 	console.log(randomName); // Outputs a random name
// 	console.log(randomEmail); // Outputs a random email
// 	console.log(randomProduct); // Outputs the random product name generated
// 	console.log(randomCompany); // Produces a random company name
// 	console.log(randomCard); // Gives back a random card
// 	console.log(faker.date.past()); // Generates a random past date
// }


 
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
 