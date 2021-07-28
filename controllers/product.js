const { Product } = require("../db/models/product")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addProduct = promise(async (req, res) => {
    const body = req.body

    if (req.user.isAdmin) {
        const newProduct = new Product({
            ...body
        })
        await newProduct.save()
        res.status(200).json({ message: "Successfully added product", product: newProduct })
    }
    else {
        throw new Exceptions.BadRequset("Only admin can add products")
    }
})

exports.getAllProducts = promise(async (req, res) => {
    const products = await Product.find()
    if (!products) throw new Exceptions.NotFound("No product found")

    res.status(200).json({ products })
})

exports.getSingleProducts = promise(async (req, res) => {
    const body = req.body

    const product = await Product.findById(body.productId)
    if (!product) throw new Exceptions.NotFound("No product found")

    res.status(200).json({ product })
})