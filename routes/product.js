const express = require("express")
const router = express.Router()
const product = require("../controllers/product")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addProductSchema, getProductSchema } = require("../validation/product")

router
    .post("/add", authentication, validation(addProductSchema), product.addProduct)
    .get("/get-all", authentication, product.getAllProducts)
    .post("/get-single", authentication, validation(getProductSchema), product.getSingleProducts)

module.exports = router