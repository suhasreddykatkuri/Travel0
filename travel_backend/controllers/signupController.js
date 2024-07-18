const CryptoJS = require('crypto-js');

const User = require("../model/user.model");

const singupHandler = async (req, res) => {
    try{
        console.log("camedsignupp",req.body);
        const newUser = new User({
            username: req.body.username,
            number: req.body.number,
            email: req.body.email,
            password: req.body.password
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Error creating a user" })
    }
}

module.exports = singupHandler;