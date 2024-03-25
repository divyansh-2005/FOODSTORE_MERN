const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.post("/createuser",async(req,res)=>{
    try{
        await User.create({
            // name:"Pihu",
            // password:"pihu1234",
            // email:"pihu@gmail.com",
            // location:"Nagpur,India",
            name:req.body.name,
            password:req.body.password,
            email:req.body.email,
            location:req.body.location,
        })
        res.json({success:true})
    }
    catch(error){
        console.log(error);
        res.json({success:false})
    }
})

module.exports = router;