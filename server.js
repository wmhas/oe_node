var MongoClient = require('mongodb').MongoClient;
 
const uri = "mongodb://oeuser3:321ToughJob^@128.199.195.92:27017/osc1?retryWrites=true&w=majority";
 
MongoClient.connect(uri, function(err, db) {
  if(!err) {
    console.log("We are connected");

    var dbo = db.db("osc1");
    var myobj = { name: "Company oe 1 ", address: "CYBERJAYA" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
};
});
 