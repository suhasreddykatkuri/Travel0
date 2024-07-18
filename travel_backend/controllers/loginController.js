//const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

const User = require("../model/user.model");

const loginHandler = async (req, res) => {
    try{
        console.log("backlog",req.body);
        const user = await User.findOne({ number: req.body.number });
        !user && res.status(401).json({ message: "Incorrect Mobile Number" });

        const decodedPassword = user.password;
        decodedPassword !== req.body.password && res.status(401).json({ message: "Incorrect Password"});

        const { password, ...rest } = user._doc;
        const accessToken = jwt.sign( {username: user.username}, "mysecretkey" )

        res.json({...rest, accessToken});

    }catch(err){
        console.log(err)
    }
}

module.exports = loginHandler;