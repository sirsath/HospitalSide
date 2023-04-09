
const contact = require("../model/Contact")

exports.addcontacts = async (req, res) => {
    try {
        console.log(req.body);
        await contact.create(req.body)

        res.json({
            success: true,
            message: "contact Added Successfully",
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}
exports.getallcontacts = async (req, res) => {
    try {
        const result = await contact.find()

        res.json({
            success: true,
            message: "contact fetch Successfully",
            result
        })
    } catch (error) {
        res.json({
            success: false,
            message: `Error ${error}`,

        })
    }
}