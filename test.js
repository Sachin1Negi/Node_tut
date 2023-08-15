const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://127.0.0.1:27017';
//changed localhost to 127.0.0.1 and everything worked.
const client = new MongoClient(url);

// Database Name
const dbName = 'bank';
main();
//console.log('before main')
async function main() {
    console.log('before main')
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Accounts');

  // the following code examples can be pasted here...
  console.log('done');
  return 'done.';
}