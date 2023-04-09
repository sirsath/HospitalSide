const { getTime } = require("date-fns")
const mongoose = require("mongoose")
var appoinmentSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, "please Enter name"]
    },
    email: {
        type: String,
        // required: [true, "please Enter email"]
    },
    mobile: {
        type: String,
        // required: [true, "please Enter mobile"]
    },
    chooseDoctor: {
        type: String,
    },
    chooseDateTime: {
        type: Date,
    },
    // chooseTime: {
    //     type: Number,
    //     default: (new Date()).getTime()
    // },
    description: {
        type: String,
    }
})
module.exports = mongoose.model("patients", appoinmentSchema)