const express = require("express");
const cors = require('cors');
const app=express();
const PORT=3000;
const HOST="localhost"
const connection=require("./config/db")
connection()
app.get("/",(req,res)=>{
    res.json({message:"Server is running"})
})
app.listen(PORT,HOST,()=>{
    console.log(`server is running at http://${HOST}:${PORT}`)
})