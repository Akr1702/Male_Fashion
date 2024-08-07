const express = require("express");
const getproductcontroller = require("../controllers/products/getproductcontroller");
const router = express.Router();

router.get("/", getproductcontroller);
router.get("/name/:name", getproductcontroller);
router.get("/category/:category", getproductcontroller);
router.get("/sub_category/:sub_category", getproductcontroller);
router.get("/rating/:rating", getproductcontroller);

module.exports = router;