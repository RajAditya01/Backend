const express = require('express');
const router = express.Router();

require('../DB/conn');
const User = require("../models/userSchema"); 
router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});

//using promises

// router.post('/register', (req, res) => {
//     const {name, email, phone, work, password, cpassword} =req.body;

//     if(!name ||!email ||!phone ||!work ||!password ||!cpassword){
//         return res.status(422).json({error:"Email Already Exist"});
//     }

//     user.findOne({email: email})
//         .then((userExist)=>{
//             if(userExist){
//                 return res.status(422).json({error:"Email already Exist" })
//             }
//         } )

//     const user = new user({ name, email, phone, work, password, cpassword });

//     user.save().then(()=>{
//         res.status(201).json({message:"user register successfully !" });
//     }).catch((error)=> res.status(500).json({error :"Failed to register"}));
// }).catch(error=>{console.log(error)});

// module.exports = router;


// using async await
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please fill in all the fields" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exists" });
        }

        const newUser = new User({ name, email, phone, work, password, cpassword });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to register" });
    }
});

module.exports = router;
