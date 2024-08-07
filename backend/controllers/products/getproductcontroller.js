const mongoose = require("mongoose")
const ProductCollection = require("../../models/ProductSchema")
const getproductcontroller = async (req, res) => {
    try {
        const {category} = req.params
        const {name ,sub_category} = req.params
        let products;
        if (category) {
            const searchcategory = category.toLowerCase()
            products = await ProductCollection.find({
                category: { $regex: new RegExp(searchcategory, "i") }
            })
        }

        else if (name) {
            const searchname = name.toLowerCase()
            products = await ProductCollection.find({
                name: { $regex: new RegExp(searchname, "i") }
            })
        }

        else if (sub_category) {
            const searchsub = sub_category.toLowerCase()
            products = await ProductCollection.find({
                sub_category: { $regex: new RegExp(searchsub, "i") }
            })
        }

        else {
            products = await ProductCollection.find()

        }

        if (!products || products.length === 0)
            return res.status(404).send({ message: "product not found" })
        res.status(200).send(products);
        console.log("product fetched successfully")
    }
    catch (error) {
        res.status(500).send({
            message: "Error in fetching product"
        })
        console.log(`error occured : ${error}`)
    }
}

module.exports = getproductcontroller
