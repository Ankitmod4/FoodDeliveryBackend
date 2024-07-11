let Caart = require('../Model/Cart');


exports.DeleteCart = async (req,res) => {
    try {
        const { id } = req.params;
       
        const data = await Caart.findByIdAndDelete({ 
            _id:id
        })
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