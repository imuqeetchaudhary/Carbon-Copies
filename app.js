const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")
const user = require("./routes/user")
const product = require("./routes/product")
const cors = require("cors")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

app.get("/", async (req, res) => {
    res.json({ message: "Carbon Copies Rest Api" })
})

app.use("/user", user)
app.use("/product", product)

module.exports = { app }