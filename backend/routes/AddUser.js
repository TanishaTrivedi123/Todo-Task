const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/userSchema");
const router = express.Router();

router.post("/signup", async (req,res) => {
    try{
        const {name, email, password} = req.body;

        if(!name || !email || !password){
            return res.status(400).json({msg: "All fields are required"});
        }

        const user = await User.findOne({email});

        if(user){
            return res.status(400).json({msg: "User is already exist"});
        }

        const newUser = new User({
            name,
            email,
            password
        })

        await newUser.save();
        return res.status(201).json({msg: "User registered successfully", name, email});
    }
    catch(error){
        console.log(error);
        return res.status(500).json({msg: "Internal Server Error"});
    }
})

module.exports = router;