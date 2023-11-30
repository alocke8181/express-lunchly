/** Database for lunchly */

const { Client } = require("pg");

let dbName;
if (process.env.NODE_ENV == 'test'){
  dbName = 'lunchly_test';
}else{
  dbName = 'lunchly';
};

let db = new Client({
    host: "/var/run/postgresql",
    database: dbName
  });
db.connect();


module.exports = db;