const express=require("express");
const dotenv=require("dotenv");
dotenv.config()
const mongoose=require("mongoose")

const app=express()


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

app.listen(process.env.PORT || 5000,()=>{
  console.log(`Application started on the port :${process.env.PORT}`)
})