const mongoose = require("mongoose");

const connection=async()=>{
   try {
     await mongoose.connect("mongodb://localhost:27017/TeachBazaar")
     console.log("Successfully connected to database!!")
   } catch (error) {
    console.log("Something went wrong bhai",error)
   }
}

module.exports=connection