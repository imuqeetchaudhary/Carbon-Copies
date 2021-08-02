const yup = require("yup")

exports.addRentalHistorySchema = yup.object({
    productId: yup.string(),
    fistName: yup.string(),
    middleName: yup.string(),
    lastName: yup.string(),
    street: yup.string(),
    city: yup.string(),
    zipCode: yup.string(),
    dobMonth: yup.number(),
    dobDate: yup.number(),
    dobYear: yup.number(),
    heightFeet: yup.number(),
    heightInches: yup.number(),
    weight: yup.number(),
    hairColor: yup.string(),
    eyeColor: yup.string(),
    gender: yup.string(),
    image: yup.string(),
})

exports.getRentalHistorySchema = yup.object({
    rentalHistoryId: yup.string().required(),
})