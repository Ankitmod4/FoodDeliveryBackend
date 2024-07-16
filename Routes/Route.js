const express = require('express');
const { PostData } = require('../Controllers/PostData');
const { LoginData } = require('../Controllers/LoginData');
const {AddCart}=require('../Controllers/AddCart')
const {GetCart,GetCartById}=require('../Controllers/GetCart')
const {UpdateCart } = require('../Controllers/UpdateCart');
const { DeleteCart } = require('../Controllers/DeleteCart');
const { body, validationResult } = require('express-validator');
const { OrderCart } = require('../Controllers/OrdeCart');
const { PreviousCart } = require('../Controllers/PreviousCart');


const router = express.Router();  
router.post('/signupdata', [body('email').isEmail(),
    body('name').isLength({min:3}), 
    body('password').isLength({min:8})   
], PostData); 
router.post('/logindata',[body('email').isEmail(), 
body('password').isLength({min:8})   
], LoginData);
router.post('/cartadd', AddCart); 
router.get('/cartget',GetCart );  
router.get('/cartget/:id',GetCartById );  
router.put('/cartupdate/:id',UpdateCart ); 
router.delete('/cartdelete/:id', DeleteCart); 
router.post('/ordercart', OrderCart);
router.post('/previousorder', PreviousCart);

module.exports = router; 

