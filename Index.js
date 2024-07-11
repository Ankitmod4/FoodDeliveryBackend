
const express = require('express');
const app = express();
const cors=require('cors')
const PORT = process.env.port || 4000;
require('dotenv').config;
app.use(express.json()); 
app.use(cors()); 

const route = require('./Routes/Route');
app.use('/api/v1', route); 
 
// Databasr connection
const DBconnect = require('./DBconnect');  
DBconnect();
app.listen(PORT,() => {
    console.log(`Server is Running on PORT:${PORT}`);
}
)