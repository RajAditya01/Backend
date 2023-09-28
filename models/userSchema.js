const mongooose = require('mongoose');
const bcrypt = require ('bcryptjs')
const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
})

const User = mongooose.model('USER', userSchema);

module.exports = User;


// we are hashing the password
userSchema.pre('save',async function(next){
    if(this.isModified('password')) {
        this.password = bcrypt.hash(this.password,12);
        this.cpassword = bcrypt.hash(this.cpassword,12);
    }
    next();
});