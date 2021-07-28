const express = require("express")
const router = express.Router()
const rentalHistory = require("../controllers/rental-history")
const { authentication } = require("../middlewares/isAuth")
const { validation } = require("../middlewares/validation")
const { addRentalHistorySchema, getRentalHistorySchema } = require("../validation/rental-history")

const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: "./upload/",
    filename: (req, file, fileName) => {
        return fileName(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 },
    fileFilter: function (req, file, callback) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return callback(new Error('Only images are allowed'))
        }
        callback(null, true)
    }
})

router
    .post("/add", authentication, validation(addRentalHistorySchema), upload.array("image"), rentalHistory.addRentalHistory)
    .get("/get-all", authentication, rentalHistory.getAllRentalHistories)
    .post("/get-single", authentication, validation(getRentalHistorySchema), rentalHistory.getSingleRentalHistory)
    .delete("/delete", authentication, validation(getRentalHistorySchema), rentalHistory.deleteRentalHistory)

module.exports = router