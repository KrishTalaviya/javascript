var express=require('express');
const { Server } = require('http');
var app=express();
app.get('/',(req,res)=>{
    res.send("Infinity loves me");
})
app.listen(3000,()=>{
    console.log("Server started at your 16");
})