const yup = require("yup")

exports.addProductSchema = yup.object({
    productName: yup.string().required(),
    productDescription: yup.string().required(),
    productPrice: yup.string().required()
})

exports.getProductSchema = yup.object({
    productId: yup.string().required()
})