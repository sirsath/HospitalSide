const appoinment = require("../model/Appointment")
const { format, addMinutes } = require("date-fns")

exports.addappoinment = async (req, res) => {
    try {
       const {chooseDateTime}  = req.body
        await appoinment.create({
            ...req.body ,
            chooseDateTime : new Date(`${chooseDateTime}`)
        })
        // await appoinment.create({
        //     ...req.body, 
        //     chooseDateTime: format(new Date(), toString('yyyy-MM-dd/H/m/a'))
        //     // chooseTime: format(addMinutes(new Date(), 0), parseInt("H/m/a"))
        // })   
        res.json({
            success: true,
            message: "appoinment Added Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,
        })
    }
}


exports.getAllappoinmentList = async (req, res) => {
    try {
        const result = await appoinment.find({
            chooseDateTime: { $gt: new Date() }})
        res.json({
            success: true,
            message: "appoinmentList fetch Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}
