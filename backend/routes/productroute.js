const productcontroller = require("../controllers/products/getproductcontroller")

const express = require("express")
const router = express.Router()
router.get("/",productcontroller)
module.exports = router