const yup = require("yup")

exports.addRentalHistorySchema = yup.object({
    productId: yup.string().required(),
    fistName: yup.string().required(),
    middleName: yup.string().required(),
    lastName: yup.string().required(),
    street: yup.string().required(),
    city: yup.string().required(),
    zipCode: yup.string().required(),
    dobMonth: yup.number().required(),
    dobDate: yup.number().required(),
    dobYear: yup.number().required(),
    heightFeet: yup.number().required(),
    heightInches: yup.number().required(),
    weight: yup.number().required(),
    hairColor: yup.string().required(),
    eyeColor: yup.string().required(),
    gender: yup.string().required(),
    image: yup.string().required(),
})

exports.getRentalHistorySchema = yup.object({
    rentalHistoryId: yup.string().required(),
})