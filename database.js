const mysql_pkg = require("mysql");

var properties = {
    host: "xxx",
    user: "root",
    password: "xxx",
    port: 3306,
    database: "market",
}
// it take a callback and passes the error into the callback if connection failed
var connection = mysql_pkg.createConnection(properties);

connection.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("connected to mysql is successful");
    }
    });

    module.exports = {connection};
