const mongoose = require("mongoose")
const schema = mongoose.Schema

const rentalHistorySchema = new schema({
    userId: {
        type: schema.Types.ObjectId,
        ref: "User"
    },
    productId: {
        type: schema.Types.ObjectId,
        ref: "Product"
    },
    firstName: {
        type: String,
        require: true
    },
    middleName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    street: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    zipCode: {
        type: String,
        require: true
    },
    dobMonth: {
        type: Number,
        required: true
    },
    dobDate: {
        type: Number,
        require: true
    },
    dobYear: {
        type: Number,
        require: true
    },
    heightFeet: {
        type: Number,
        require: true
    },
    heightInches: {
        type: Number,
        require: true
    },
    weight: {
        type: Number,
        require: true
    },
    hairColor: {
        type: String,
        require: true
    },
    eyeColor: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    idPicture: {
        type: String,
        require: true
    },
    idSignature: {
        type: String,
        require: true
    },
    isPaid: {
        type: Boolean,
        default: false
    }
})

exports.RentalHistory = mongoose.model("RentalHistory", rentalHistorySchema)