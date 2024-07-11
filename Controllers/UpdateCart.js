let Caart = require('../Model/Cart');


exports.UpdateCart = async (req,res) => {
    try {
        const { id } = req.params;
        const { Product, Price } = req.body;
        const data = await Caart.findByIdAndUpdate({ 
            _id:id
        },{Product,Price})
        if (!data) {

            res.status(500).json({
                success: false,
                message:"Id not provided",
            })
        }
        res.status(200).json({ 
            success: true,
            data: data,
            message:"Product updated Successfully",
        })
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message:err.message,
        })

}

}