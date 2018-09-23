var mongoose = require("mongoose");
//var mongodb = "mongodb://127.0.0.1/EmpMDB";
// var mongodb = "mongodb://FirstUser:viveksharma@ds155509.mlab.com:55509/empdb";
// mongodb://<dbuser>:<dbpassword>@ds111913.mlab.com:11913/cli-app
var mongodb ="mongodb://admin:Test#123@ds111913.mlab.com:11913/cli-app"
mongoose.connect(mongodb);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb error in connection'));
module.exports = mongoose;