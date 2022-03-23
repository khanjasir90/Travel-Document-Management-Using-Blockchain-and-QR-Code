const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//const User = require("../../models/User");



const Joi=require('@hapi/joi');
const e = require("express");

const registerSchema = Joi.object({
    fname: Joi.string().min(3).max(30).required(),
    lname: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(3).max(30).required().email(),
    password: Joi.string().min(3).max(30).required(),
})
const loginSchema=Joi.object({
    email: Joi.string().min(3).max(30).required().email(),
    password: Joi.string().min(3).max(30).required(),
})
//Signup User
router.post("/register",async (req, res) => {
    const emailExist = await User.findOne({ email: req.body.email });
    // If mail exist then return
    if (emailExist) {
        res.status.send("Email already exist");
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: hashedPassword,
    });
    try{
        const {error}=registerSchema.validate(req.body);
        if(error){
            res.status(400).send(error.details[0].message);
            return;
        }
        else{
            const savedUser = await user.save();
            res.status(200).send("user created");
        }
    }catch(error){
            res.status(500).send(error);
        }
}); 

router.post("/login", async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).json({error:"Incorrect Email-Id"});
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
        return res.status(400).json({error:"Incorrect password"});
    }
    try{
        const {error} = await loginSchema.validateAsync(req.body);
        if(error) return res.status(400).json({error:error.details[0].message});
        else{
            const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
            res.header("auth-token", token).send(token);
            res.status(200).json({
                "success": true,
            })
        }
    }catch(error){
        res.status(500).json({error:error});
    }
});
module.exports = router;