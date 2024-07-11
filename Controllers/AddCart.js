let Caart = require('../Model/Cart');

exports.AddCart = async (req,res) => {
    try {
        const { Product, Price } = req.body;
        const data = await Caart.create({ 
            Product,Price
        })
        res.status(200).json({
            success: true,
            data: data,
            message:"Product added Successfully"
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message:err.message,
        })

}

}