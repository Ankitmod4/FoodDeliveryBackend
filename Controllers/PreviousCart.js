let order = require('../Model/Order');

exports.PreviousCart = async(req,res) => {
    try {
        const { email } = req.body;
        if (!email) {
           return res.status(500).json({
                success: false,
                message:"This is your First Order"
            })
        }
        let cartItems = await order.find({ email })
        res.status(200).json({
            success: true,
            data: cartItems,
            message:"Order find Successfully"
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            data: "Error occured",
            message:error.message,
        })

    }
}