const mongoose = require('mongoose');
const DBconnect=() => {
   mongoose.connect("mongodb://localhost:27017/gofood",{
 
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