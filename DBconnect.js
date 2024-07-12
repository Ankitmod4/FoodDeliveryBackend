const mongoose = require('mongoose');
const DBconnect=() => {
   mongoose.connect("mongodb+srv://AnkitMod:ec9ObUNKLHVqgWge@ankitcluster.e47tu6x.mongodb.net/FoodApp",{
 
       useUnifiedTopology: true, 
       useNewUrlParser: true,
       
   })
    .then(() => {
        console.log("DataBase is Connected");
    } 
    )
    .catch((err) => {
        console.log(err);
        process.exit(1);
    }
    )
}

module.exports = DBconnect;