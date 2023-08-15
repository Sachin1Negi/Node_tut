
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

const dbName = 'bank';
async function dbconnect() {

  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  return db.collection('Accounts');

}

module.exports = dbconnect;