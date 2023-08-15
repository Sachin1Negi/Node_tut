//  About NodeJs 
//open source server environment, runs on v8 engine.
//Common libraries used : 'fs', 'express', 'http', 'path',  
//To use : foreach, json/Stringify, arr.filter, 


    //var arr = [1,2,3,4,5];
    // for( var i=0; i<5; i++){
    //     console.log(arr[i]);
    // }

//arr.filter() takes functions as an argument, with parameter being the elements of the array.
    // arr.filter( (i) => {
    //     console.log(i);
    // })

//using arr.forEach
//It also takes function as argument and the parameter within the function are the elements only.
    // arr.forEach( (i) => {
    //     console.log(i);
    // })

/////////////////////////////////////////////////////////////////////////////
//JSON object

//Don't forget " , " after each variable inside object. 
// All objects like this are JSON objects.
    // var obj = {
    //     name : "sachin",
    //     Id : 22531174,
    //     Hobby : "football",
    //     Height : 5.6
    // }

    // console.log(JSON.stringify(obj));

//////////////////////////////////////////////////////////////////////////////////
//fs : file system.

//Working with : fs : file System library of nodejs

//write the library in single quotes.
//common operations in file system.
//create file, Write Files, Append Files, Close Files, Read Files, Delete Files

// const fs = require('fs');
// console.log(fs.readdir('.', (err,files)=>{
//     console.log(files) //shows all files at given path, in an array.
// }));

//Creating a File
// The File System module has methods for creating new files:
// fs.appendFile()
// fs.open()
// fs.writeFile()

//Method 1 :
//You try to append on a file, it the files does not exist, a new file is created
//this seems to be the best way to create a file.
 
    // fs.appendFile("createFile.txt", " created new file ", (err) =>{
    //     if(err) throw err;
    // })

//Method 2 :
//Note single quotes are used for writing the names of files etc
//data in fs.open seems useless.
    // var data = "acnsd"
    // fs.open("createFile.txt", 'w' , (err, data)=>{
    // if(err){ console.log("error found")}
    // })
//overwrite ho gayi file, with no data

//Method 3
//fs.writeFile creates a new file if not present, if present replaces data with new data.
    // var data = "hi there, what's going on";
    // fs.writeFile("a.js", "console.log(6574);", (err)=>{
    //     if(err) throw(err);
    // })
    
//Deleting a file : fs.unlink
    // fs.unlink('a.js' , (err) => {
    //     if(err) throw err;
    // });

//Renaming the file : fs.rename
    //    fs.rename("abcde.js" , "abc.js", (err) => {
    //     if(err) throw err;
    //    })

///////////////////////////////////////////////////////////////////////////
//http

//http makes your computer a server and now the web can connect with your pc using your url.

// const http = require('http')
// http.createServer( (req, resp)=> {
//     resp.writeHead( 200, {'Content-type' : 'application/JSON'})
//     var data  = {
//         name : 'Sachin',
//         College : 'NIT Delhi',
//         Brach : 'EEE'
//     }
//     resp.write( JSON.stringify(data) ); 
//     resp.end()
// }).listen(4000);

////////////////////////////////////////////////////////////////////////////////////
//path

// const path = require('path')
// var p = path.join(__dirname, '.');  //. means current directory
// console.log( `current directory is : ${p} , save this location for future reference`)

//////////////////////////////////////////////////////////////////////////////////////
//express : install it before use, "npm i express"  //else error: cannot find express module.

    // const express = require('express')
    // const app = express(); //executable

    // app.get( '', (req, res) =>{
    //     res.send("hello world")
    // })
    // app.get( '/about', (req, res) =>{
    //     res.send("About")
    // })
    // app.listen(5000);

//response.sendfile('path', object being used in file present at provided path);
//it can have  one or two parameters.

//Installing ejs template engine. //Installed
    // app.set('view engine', 'ejs');

//finding exact path  //to use in response.sendFile(exact path required);
    // const path = require('path');
    // let epath = path.join(__dirname, 'public');
    // let ejspath = path.join(__dirname, 'view_ejs');
    // console.log('.');
    // console.log(epath);

    // app.get('/hello', (req, resp) =>{
    //     resp.sendFile(`${epath}/home.html`); //when you write ./ here it only takes it as a string
    //     //and not as the path for root directory.
    // })
    // app.listen(5000);

////////////////////////////////////////////////////////////////////////////////////////////////
    // const dateTimeObject = new Date();

    // console.log(`Date: ${dateTimeObject.toDateString()}`);
    // console.log(`Time: ${dateTimeObject.toTimeString()}`);

///////////////////////////////////////////////////////////////////////////////////////////////
// Date: Sun Aug 13 2023
// Time: 09:12:45 GMT+0530 (India Standard Time)
// Time: 14:01:33 GMT+0530 (India Standard Time) //time wasted : 5 hours.

//using response.render("file.ejs", {data if any to send});

    // app.get('', (req,res) =>{
    //     const user = {
    //         name : 'sachin',
    //         email : 'sachin@test.com'
    //     }
    //     res.render(`${ejspath}/view_template`, {user})  //here view is a directory
    // })
    // app.listen(5000); 

//automatically searching for view_template in views directory, is it a convention or something.
//that a view engine's file is checked in views directory.
//Yes, by default if you do not give the exact path like above, the node.js looks for render in 'views' directory. but if you give the exact path, it checks in provided path.

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Middlewares : These are simple funtions which takes three parameter request, response and next().
//middlewares act as a guard in front of routes, a url request need to go through checks written on middlewares befor going ahead.

//writing from scratch.

    // const express = require('express')
    // const app = express();

    // const middleware = (req, res, next)=>{

    //     if( req.query.age < 18){
    //         res.send("Permission denied, age factor, stopped at middleware.")
    //     }
    //     else{
    //         next();
    //     }
    // }

    // app.use(middleware); //this tells node.js that we are using a middleware.
    // //if you do not add middleware in any of the api calls, then it will be applied for all (Application level middleware), else if you apply on any one, it will only work with those which have added it in their api call.(Router level middleware.)

    // app.get('', middleware, (req,res)=>{
    //     res.send("Get Api called, Home.")
    // })

    // app.get('/about', middleware,  (req,res)=>{
    //     res.send("Get Api called, About")
    // })

    // app.get('/help',  (req,res)=>{
    //     res.send("Get Api called, Help")
    // })

    // app.listen(5000)

/////////////////////////////////////////////////////////////////////////////////////////////
//Designing middleware using express.Route()

    // const express = require('express')
    // const app = express()

    // const middleware = (req, res, next)=>{

    //     if( req.query.age < 18){
    //         res.send("Permission denied, age factor, stopped at middleware.")
    //     }
    //     else if( !req.query.age){
    //         res.send("Age must be provided, stopped at middleware")
    //     }
    //     else{
    //         next();
    //     }
    // }

    // const route = express.Router()
    // app.use('/',route);   //what is the meaning of '/' here.
    // route.use(middleware);

    // app.get('', (req,res)=>{
    //     res.send("Get Api called, Home.")
    // })

    // route.get('/about',  (req,res)=>{
    //     res.send("Get Api called, About")
    // })

    // route.get('/help',  (req,res)=>{
    //     res.send("Get Api called, Help")
    // })

    // app.listen(5000)



////////////////////////////////////////////////////////////////////////////////////////
//Connecting node.js with MongoDB.
//METHOD 1

// const Mongoclient = require('mongodb').MongoClient;
// const url = 'mongodb://127.0.0.1:27017'
// const client = new Mongoclient(url, (err) =>{

//     const db = 
// });

// async function getdata(){

// const database = 'bank'
// const result = await client.connect()
// console.log(result);

// }
// getdata();
// const db = result.db(database)
// let collection = db.collection('Accounts')
// let data = collection.find().toArray();
// console.log(data);

///////////////////////////////////////////////////////////////////////////
//METHOD 2 AND RECOMMENDED.

// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://127.0.0.1:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'bank';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('Accounts');

//   // the following code examples can be pasted here...
//   console.log('done');
//   return 'done.';
// }

///////////////////////////////////////////////////////////////////////////////////////
// SO MUCH HASSLE AND THE SOLUTION WAS TO CHANGE "LOCALHOST" TO '127.0.0.1'
//////////////////////////////////////////////////////////////////////////////////////

//Applying CRUP operations using node.js and mongodb connection

//Read using get() api.

const dbconnect = require('./mongodbconnect');
const express = require('express')
const app = express()

//we are not going to connect again and again, so I am going to make a separate file.

// app.get('/', async (req, res)=>{
    
//     //res.send("get api called,Home");
//     console.log('Inside get api')
//     const collection = await dbconnect() //why are we using () sign here, we are calling dbconnect()
//     console.log('connected successfully')
//     const data = await collection.find({}).toArray();
//     //console.log(data);
//     res.send(data);

// })

//////////////////////////////////////////////////////////////////////////
//Insert using post api.
//Don't forget in post api we need to first send body data from web ( postman, angular or react etc)
//I am using postman API to test my API's and it seems like postman has replaced the web with itself.

    // app.use(express.json()); //necessary to read body coming from web.
    // app.post('/', async (req,res) => {
    //     console.log("inside post api")
    //     let collection = await dbconnect();
    //     console.log("connected successfully")
    //     let result = await collection.insertOne(req.body);
    //     console.log(req.body);
    //     res.send(req.body);
    // })

//////////////////////////////////////////////////////////////////////////////
//PUT API :Update using put api, we can also update using post api, but a separate api, put api is recommended.

// app.put('/', async (req,res)=>{
//     let collection = await dbconnect()
//     console.log("connected successfully");
//     //let result = await collection.updateOne( {'Name' : 'Deva'},{ $set : {"Savings":200000}});
//     let result = await collection.updateOne( {'Name' : 'Deva'},{ $set : {"Savings":200000}});
//     console.log("working")
//     res.send("working")
// })

/////////////////////////////////////////////////////////////////////////////////
//DELETE API : Deleting using delete api.

const mongodb = require('mongodb');
app.delete('/:id', async (req,res)=>{
    
    console.log(req.params.id);
    let collection = await dbconnect()
    console.log("connected successfully");
    let result = await collection.deleteOne({ _id: new mongodb.ObjectId(req.params.id)} );
    console.log("working")
    res.send("working")
})

//////////////////////////////////////////////////////////////////////////////
//Due to multiple terminals opened, your system might tell you that a given port is busy.
//make sure you have only one terminal open, you can check it in the sideward of terminal.

app.listen(5000); 

///////////////////////////////////////////////////////////////////////////////////////////////

//Starting mongoose tutorial
//npm i mongoose (Installing mongoose), it is used against mongodb to bring new features like security token, etc using schema and model class of mongoose. Most real life projects use mongoose only.

