const express = require("express")
const color = require("colors")
const dotenv = require("dotenv").config()
const morgan = require("morgan")
const rootroute = require('./routes/rootroute')
const connectDB = require("./config/db")

const app =express()
const PORT = process.env.PORT ||  7000 || 8000 

app.get('/',(req,res)=>{
    res.send("Api is working");   
})

app.use('/fashionproducts',rootroute)
connectDB()

app.listen(PORT,()=>{
    console.log(PORT);
    console.log(`Server is running on ${PORT}`.bgBlue.white)
})