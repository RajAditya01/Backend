const mongoose =require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type:Number,
        required: true
    },
    Work: {
        type:String,
        required: true
    },
    password: {
        type:Number,
        required: true
    },
    cpassword: {
        type:Number,
        required: true
    }
});

const user = mongoose.model('USER', userSchema);

module.exports =User;