const express = require("express");
const cors = require('cors');
const app=express();
const cookies=require('cookie-parser')
app.use(express.json())

const PORT=3000;
const HOST="localhost"

const connection=require("./config/db")
connection()
app.get("/",(req,res)=>{
    res.json({message:"Server is running"})
})

const teacherRoutes=require('./routes/teacher.routes');
const cookieParser = require("cookie-parser");
app.use('/api',teacherRoutes)
const userRoutes=require('./routes/user.routes');
app.use('/api',userRoutes)
app.listen(PORT,HOST,()=>{
    console.log(`server is running at http://${HOST}:${PORT}`)
})