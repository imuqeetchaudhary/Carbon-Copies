const mongoose = require("mongoose")
const schema = mongoose.Schema

const productSchema = new schema({
    productName: {
        type: String,
        require: true
    },
    productDescription: {
        type: String,
        require: true
    },
    productPrice: {
        type: Number,
        require: true
    },
    paymentLink: {
        type: String,
        require: true
    }
})

exports.Product = mongoose.model("Product", productSchema)