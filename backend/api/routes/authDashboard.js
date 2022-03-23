//const User = require("../models/User");
const verify = require("../middleware/authVerify");
const router = require("express").Router();
router.get("/allusers",verify,async(req,res)=>{
    try{
        const results = await User.find().exec()
        res.status(200).json({success:results});
    } catch(err){
        res.status(500).json({error:err});
    }
})

module.exports=router;