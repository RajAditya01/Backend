const express = require('express');
const router = express.Router();

require('../DB/conn');
const User = require("../models/userSchema"); 
router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

router.post('/register', (req, res) => {
    const {name, email, phone, work, password, cpassword} =req.body;

    if(!name ||!email ||!phone ||!work ||!password ||!cpassword){
        return res.status(422).json({error:"Email Already Exist"});
    }

    user.findOne({email: email})
        .then((userExist)=>{
            if(userExist){
                return res.status(422).json({error:"Email already Exist" })
            }
        } )

    const user = new user({ name, email, phone, work, password, cpassword });

    user.save().then(()=>{
        res.status(201).json({message:"user register successfully !" });
    }).catch((error)=> res.status(500).json({error :"Failed to register"}));
}).catch(error=>{console.log(error)});

module.exports = router;