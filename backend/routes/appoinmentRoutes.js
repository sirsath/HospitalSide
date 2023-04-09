const { addappoinment, getAllappoinmentList } = require("../controllers/appointmentcontroller")

const router = require("express").Router()
router
    .get("/", getAllappoinmentList)
    .post("/add", addappoinment)

module.exports = router