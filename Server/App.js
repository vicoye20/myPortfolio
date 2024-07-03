const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const UserModel = require("./Models/userModel")
const cors = require("cors");

const App = express();

// middleware

App.use(express.json());
App.use(express.urlencoded());
App.use(cors());

App.get('/', (req, res) =>{
    res.send('<h4>Hello World!</h4>');
})

// user posting to database

App.post("/send", async (req,res)=>{
    console.log("Posted");
    try{
        const user = await UserModel.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({
            error:error.message
        });
    }
})

// connect to mongoDb

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Connected to MongoDB");
    App.listen(3000,() => {
        console.log("Server is running on port 3000");
    });
})
.catch((error) => 
    {
        console.log(error);
    });