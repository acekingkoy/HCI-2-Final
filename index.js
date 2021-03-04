// import { readFile } from 'fs';
// readFile('./articles/sample.txt','utf-8',(err,file)=>{
// if(err){
//     console.log('error!');}
//     else{
//         console.log(file);
//     }
// });
const http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
let articles = [];
app.use(express.static(__dirname));
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
fs.readFile(__dirname+'/articles/sample.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
    console.log(data);
    document.getElementById('frame').innerHTML = data ;
    }
});
app.listen(8080);