const mongoose = require("mongoose")
var contactSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    }
})
module.exports = mongoose.model("contacts", contactSchema)