const express = require ('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.send(`hello world from the server router js`);
});

//user ne jo kuch v likha hai sara data ftch ho jayega -->res.send se
router.get('/',(req, res) =>{
    res.send(`Hello worlsd from the server router js`);
});

module.exports=router;