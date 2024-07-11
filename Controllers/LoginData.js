const mongoose = require('mongoose'); 
const DB = require('../Model/Schema');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret="mynameis dejafjajaojaojojojoj"
exports.LoginData = async (req, res) => {
    try {
        const { email, password } = req.body;
     

        const errors = validationResult(req);
        if (!errors.isEmpty()) { 
            return res.status(400).json({
                success: false,
                message: "Not Validate Properly"
            })
        }
        const data = await DB.findOne({ email });

        if (!data) {

            return res.status(400).json({
                success: false,
                message: "Enter Valid Creddentials",
            })
        }
        const match = await bcrypt.compare(req.body.password,data.password);
        if (!match) {
            return res.status(400).json({
                success: false,
                message: "Enter Valid Creddentials",
            })
        } 
        
        const accessToken = jwt.sign(JSON.stringify(data), jwtsecret);
        res.accessToken = accessToken;
        return res.status(200).json({
                
                success: true,
                message: data,
                accessToken,
                 message:"Logged in successfully",
            })
         
    }
    catch (err) {
            return res.status(400).json({
                success: false,
                message: err.message,
            })

        } 
    }

