const express = require('express');
const client = require('twilio')('ACa7f729c027f2e6825fbdb8977db1bbf7','12d8b155186e83cbc96aca208643aa63');
const app=express();
const cors=require('cors');
const dotenv = require('dotenv').config();
const fast2sms = require('fast-two-sms')
const serverless = require('serverless-http');
var nodemailer = require('nodemailer');
var port=process.env.PORT||5000
 app.use(cors())
 app.use(express.json())
 
//  var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'akshatsaini497@gmail.com',
//       pass: 'Akshat09'
//     }
//   });
  
//   var mailOptions = {
//     from: 'akshatsaini497@gmail.com',
//     to: 'anshsaini27@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
  
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
 app.post('/sms', async(req,res)=>{
     const {phone}  =await req.body
    // client.messages.create({

    //     body:'your gym membership is expired ',
    //     to:  phone,
    //     from:'+18646643216'
    //    }).then(message=>console.log(message)).catch(error=>console.log(error))
    // res.send(phone)
    fast2sms.sendMessage(
        {
        authorization:process.env.API_KEY,
        message : "Welcome to club7 Gym&spa. We appreciate your decision in joining our club." ,
        numbers :[phone]
    }) 
    res.send(JSON.stringify('SUCCESSFULL'))

})

app.post('/email', async (req,res)=>{
    const {email}=req.body
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'akshatsaini497@gmail.com',
            pass:'jmixhjpaazfzoibe'
        }
    })
    let info=transporter.sendMail({
        from:'akshatsaini497@gmail.com',
        to:email,
        subject:'Thanks message from club7 gym&spa',
        text:"Welcome to club7 Gym&spa. We appreciate your decision in joining our club. Please let us help you succeed with your goals. We understand the challenges individuals face when deciding to start working out. For the majority, simply the question of how to exercise is the most common, for others, finding the time to workout can become the biggest obstacle. At club7 Gym, we understand these questions and challenges and will dedicate all our resources to help you lose weight and reach your goals. Here at club7 Gym, you will have a great time working out with friends, while getting in the best shape of your life."
    })
    if(info){
        res.json('SUCCESSFULL')
    }
 })
 app.post('/expiresms',async(req,res)=>{
    const {phone}  =await req.body
    fast2sms.sendMessage({
        authorization:process.env.API_KEY,
        message:"your gym membership is expired"  ,
        numbers:[phone]  
    })
    res.json('SUCCESSFULL')

 })
app.listen(port,()=>{
    console.log(`you are running on port number ${port}`)

})