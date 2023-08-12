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
//express : install it before use, "npm i express"

const express = require('express')
const app = express(); //executable

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
app.set('view engine', 'ejs');

//finding exact path  //to use in response.sendFile(exact path required);
const path = require('path');
let epath = path.join(__dirname, 'public');
// console.log('.');
// console.log(epath);

app.get('/hello', (req, resp) =>{
    resp.sendFile(`${epath}/home.html`); //when you write ./ here it only takes it as a string
    //and not as the path for root directory.
})
app.listen(5000);