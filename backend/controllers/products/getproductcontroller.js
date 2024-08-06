const mongoose = require("mongoose")
const ProductCollection = require("../../models/ProductSchema")
const getproductcontroller = async(req,res)=>{
    try{
        const product = await ProductCollection.find()
        res.status(200).send(product)
        console.log("product fetched successfully")
    }
    catch(error){
        res.status(500).send({
            message:"Error in fetching product"
        })
        console.log(`error occured : ${error}`)
    }       
}

module.exports = getproductcontroller
