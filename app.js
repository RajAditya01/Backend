// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();

// const DB = 'mongodb+srv://adityavishal903:12345678@abc@cluster0.z396uwj.mongodb.net/mernstack';

// mongoose.connect(DB,{
//     userNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// } ).then(()=>{
//     console.log(`connection successful`);
// }).catch((err)=>{
//     console.log(`no connection`);
// } )
// //Middelware
// const middleware = (req, res, next) =>{
//     console.log(`Hello my Middleware`)
// }

// middleware();

// app.get('/',(req, res)=>{
//     res.send(`Hello world from the server`)
// });

// app.get('/about',middleware,(req, res)=>{
//     res.send(`Hello world from about the server`);
//     next();
// });

// app.get('/contact',(req, res)=>{
//     res.send(`Hello world from contact the server`)
// });

// app.get('/signin',(req, res)=>{
//     res.send(`Hello world from the server`)
// });

// app.get('/signup',(req, res)=>{
//     res.send(`Hello world from the server`)
// });


// console.log(`Subscribe to my channel`);

// app.listen(3000, ()=>{
//     console.log(`Server is running at Port no 3000`);
// });

const dotenv =require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path: './config.env'})
require('./DB/conn');
const User =require('./models/userSchema');

const PORT=process.env.PORT;



// Middleware
const middleware = (req, res, next) => {
    console.log(`Hello my Middleware`);
    next(); // Don't forget to call next to continue to the next middleware or route handler
}

app.get('/', (req, res) => {
    res.send(`Hello world from the server`)
});

app.get('/about', middleware, (req, res) => {
    res.send(`Hello world from about the server`);
});

app.get('/contact', (req, res) => {
    res.send(`Hello world from contact the server`)
});

app.get('/signin', (req, res) => {
    res.send(`Hello world from the server`)
});

app.get('/signup', (req, res) => {
    res.send(`Hello world from the server`)
});


app.listen(3000, () => {
    console.log(`Server is running at Port no ${PORT}`);
});
