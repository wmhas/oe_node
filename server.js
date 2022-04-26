require('dotenv').config();
var MongoClient = require('mongodb').MongoClient;
var faker = require("faker");
const { fi } = require('faker/lib/locales');

const url =  process.env.DB_URL
 
let firstName = faker.name.firstName();
let lastName = faker.address.streetAddress();

console.log(`TEST FAKER: ${firstName} ${lastName}`);

console.log(process.env.USER_ID + url);

  
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("osc1");
    var myobj = { name:firstName , address:lastName };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        //db.close();
    });

    dbo.collection("customers").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
      });


  });