const mongoose = require('mongoose');
const DB = require('../Model/Schema');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
exports.PostData = async (req,res)=> {
    
    try {
        
        
        const { name, email, password } = req.body; 
        
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                message: "Not Validate Properly",
                
            }) 
            
        }
        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(password, salt);
        
        const data = await DB.create({
            name, email, password:secPassword,
        }); 
        res.status(200).json({ 
            success: true,
            data: data,
            message: "Profile Created Successfully",
        });
    }
    catch (err) { 
        res.status(500).json({
            success: false,
            data: "Error",
            message:err.message,
        })
    }
}




