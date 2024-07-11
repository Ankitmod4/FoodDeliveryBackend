
const mongoose = require('mongoose');

let Cart = new mongoose.Schema({
    Product: {
        type: String,
        required:true
    },
     
    Price: { 
        type: String,
        required:true
    },


    
})
module.exports = mongoose.model('Caart',Cart);