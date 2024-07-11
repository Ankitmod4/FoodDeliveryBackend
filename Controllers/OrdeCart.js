let order = require('../Model/Order');
const getCurrentDateTime = () => {
    const date = new Date();
    return date.toISOString(); 
  };

exports.OrderCart = async (req,res) => {
    try {
        const { email,order_data } = req.body;
        let get = await order.findOne({ email: email });
        if (!get ) { 
            let data = await order.create({
                email, order_data
            })
            res.status(200).json({
                success: true,
                data: data, 
                message: "order placed",
                date: getCurrentDateTime()
            })
        }
        
        else {
            let data = await order.findOneAndUpdate({ email:email },
            {$push: { order_data: order_data }},{ new: true },{date:Date.now()}
            ) 
            res.status(200).json({ 
                success: true,
                data: data,
                message:"order updated successfully",
                  date: getCurrentDateTime()
            })
        }
    }
    
    catch (err) {
        res.status(500).json({
            success: false,
            message:err.message,
        })
}
}