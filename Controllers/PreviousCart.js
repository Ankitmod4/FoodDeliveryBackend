let Caart = require('../Model/Cart');


exports.PreviousCart = (req,res) => {
    try {
        const { email } = req.body;
        if (!email) {
            res.status(500).json({ 
                success: false,
                message:"This is your First Order"
            })
        }
        let res = Caart.find({ email })
        res.status(200).json({
            success: true,
            data: res,
            message:"Order find Successfully"
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            data: "Error occured",
            message:error.message
        })

    }
}