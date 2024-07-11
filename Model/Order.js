

const mongoose = require('mongoose');

let Order = new mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
      
    order_data: {
        type:Array, 
        required:true,
    },
   

    
})
module.exports = mongoose.model('order',Order);