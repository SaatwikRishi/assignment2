var mongo = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

var myobj = { name: "Henry", password : "123456", email: "henry@gmail.com", contacts: [{name: "Jassi", email: '123@gmail.com', phonenum: '12345678'}]};
function dbconnect() {
    MongoClient.connect(url, function(err, db) {
        
        
        if (err) console.log(err);
        var dbo = db.db("assignment");
        console.log("Database created!");


        // dbo.collection('users').insertOne(myobj, function(err, res) {
        //    if(err) throw err;
        //    console.log(res); 
        // })
    });
      
}


//dbconnect();
logincheck('henry@gmail.com', "123")
function logincheck(e, p) {
    MongoClient.connect(url, function(err, db) {
        if (err) console.log(err);
        var dbo = db.db("assignment");
        //console.log("Database created!");
        var query = {email: e, password: p};
        dbo.collection('users').findOne(query, function(err, res) {
            if(err) throw "Invalid Username or Password"
            return "Login Successful"
    });

}) }



