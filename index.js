const express = require('express');
const client = require('twilio')('ACa7f729c027f2e6825fbdb8977db1bbf7','12d8b155186e83cbc96aca208643aa63');
const app=express();
const cors=require('cors');
const dotenv = require('dotenv').config();
const fast2sms = require('fast-two-sms')
const serverless = require('serverless-http');
const port= process.env.PORT || 3000;
 app.use(cors())
 app.use(express.json())
 app.use(express.urlencoded({extended:false}))
 
 app.post('/sms', async(req,res)=>{
     const {phone}  =await req.body
    // client.messages.create({

    //     body:'your gym membership is expired ',
    //     to:  phone,
    //     from:'+18646643216'
    //    }).then(message=>console.log(message)).catch(error=>console.log(error))
    // res.send(phone)
    fast2sms.sendMessage({authorization:process.env.API_KEY,message : 'your gym membership is expired' ,numbers :[phone]}) 
    res.send(JSON.stringify('SUCCESSFULL'))

})
app.listen(port)