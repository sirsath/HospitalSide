const { addcontacts, getallcontacts } = require("../controllers/contactController")

const router = require("express").Router()
router
    .get("/", getallcontacts)
    .post("/addcontactsData", addcontacts)

module.exports = router