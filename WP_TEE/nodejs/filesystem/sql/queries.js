var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});

//other queries:Replace line 13 with said queries
// var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
// con.query("SELECT * FROM customers", function (err, result, fields) {
// con.query("SELECT * FROM customers WHERE address = 'Park Lane 38'", function (err, result)
//con.query("SELECT * FROM customers ORDER BY name", function (err, result)
//var sql = "DELETE FROM customers WHERE address = 'Mountain 21'";
     //con.query(sql, function (err, result) {
//var sql = "DROP TABLE customers";
//var sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";