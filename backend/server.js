const express = require("express")
const app = express()
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config({ path: "./.env" })
connectDB()

app.use(express.json())
app.use(cors())

app.use("/appoinment", require("./routes/appoinmentRoutes"))
app.use("/contacts", require("./routes/contactsRoutes"))
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server Running http://localhost:${PORT}`)) 