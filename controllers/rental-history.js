const { RentalHistory } = require("../db/models/rental-history")
const Exceptions = require("../utils/custom-exceptions")
const { promise } = require("../middlewares/promises")

exports.addRentalHistory = promise(async (req, res) => {
    const body = req.body

    const newRentalHistory = new RentalHistory({
        ...body,
        userId: req.user._id,
        idPicture: req.files[0].filename,
        idSignature: req.files[1].filename,
    })
    await newRentalHistory.save()
    res.status(200).json({
        message: "Successfully added new rental history",
        rentalHistory: newRentalHistory
    })
})

exports.getAllRentalHistories = promise(async (req, res) => {
    const rentalHistories = await RentalHistory.find()
    if (!rentalHistories) throw new Exceptions.NotFound("No rental history found")

    res.status(200).json({ rentalHistories })
})

exports.getSingleRentalHistory = promise(async (req, res) => {
    const body = req.body

    const rentalHistory = await RentalHistory.findById(body.rentalHistoryId)
    if (!rentalHistory) throw new Exceptions.NotFound("No rental history found")

    res.status(200).json({ rentalHistory })
})