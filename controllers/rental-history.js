const { RentalHistory } = require("../db/models/rental-history")
const { Product } = require("../db/models/product")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")
const fs = require("fs")

exports.addRentalHistory = promise(async (req, res) => {
    const body = req.body

    const product = await Product.findById(body.productId)
    if (!product) throw new Exceptions.NotFound("No product found")

    const newRentalHistory = new RentalHistory({
        ...body,
        userId: req.user._id,
        idPicture: req.files[0].filename,
        idSignature: req.files[1].filename,
        price: product.productPrice
    })
    await newRentalHistory.save()
    res.status(200).json({
        message: "Successfully added new rental history",
        rentalHistory: newRentalHistory
    })
})

exports.getAllRentalHistories = promise(async (req, res) => {
    const rentalHistories = await RentalHistory.find({ isPaid: true })
        .populate("productId")
    if (!rentalHistories) throw new Exceptions.NotFound("No rental history found")

    fs.writeFileSync("./upload/all-rental-histories.txt", `${rentalHistories}`)

    res.status(200).json({ rentalHistories })
})

exports.getSingleRentalHistory = promise(async (req, res) => {
    const body = req.body

    const rentalHistory = await RentalHistory.findOne({ _id: body.rentalHistoryId, isPaid: true })
        .populate("productId")
    if (!rentalHistory) throw new Exceptions.NotFound("No rental history found")

    fs.writeFileSync(`./upload/${body.rentalHistoryId}.txt`, `${rentalHistory}`)

    res.status(200).json({ rentalHistory })
})

exports.deleteRentalHistory = promise(async (req, res) => {
    const body = req.body

    await RentalHistory.findByIdAndDelete(body.rentalHistoryId)
    res.status(200).json({ message: "Successfully deleted rental history" })
})