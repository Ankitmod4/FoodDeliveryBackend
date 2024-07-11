
let Caart = require('../Model/Cart');


exports.GetCart = async (req,res) => {
    try {
        const data = await Caart.find({})
        res.status(200).json({
            success: true,
            data: data,
            message:"Products Find Successfully," 
        })
    } 
    catch (err) {
        res.status(500).json({
            success: false,
            message:err.message,
        })

}

}

 
exports.GetCartById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await Caart.findById({
            _id: id
        });
        if (!data) {

            res.status(500).json({
                success: false,
                message:"Id not provided",
            })
        }
        res.status(200).json({
            success: true,
            data: data,
            message:`${id} products fetched successfully`,
        })


    }

    catch (err) {
        res.status(500).json({
            success: false,
            message:"Id not provided",
        })


    }



}