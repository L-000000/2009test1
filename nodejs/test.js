var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'api2009'
});
 
connection.connect();
 
let sql = "select * from p_goods limit 10"
console.log(sql)
connection.query(sql,function (error, results, fields) {
    console.log(error)
  console.log(results);
});
 
connection.end();