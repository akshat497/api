// const express = require('express');
// const client = require('twilio')('ACa7f729c027f2e6825fbdb8977db1bbf7','12d8b155186e83cbc96aca208643aa63');
// const app=express();
// const cors=require('cors');
// const dotenv = require('dotenv').config();
// const fast2sms = require('fast-two-sms')
// const serverless = require('serverless-http');
// var nodemailer = require('nodemailer');
// const SendmailTransport = require('nodemailer/lib/sendmail-transport');

//  app.use(cors())
//  app.use(express.json())
 

//  app.post('/email', async (req,res)=>{
//     const {email}=req.body
//     let transporter=nodemailer.createTransport({
//         service:'gmail',
//         auth:{
//             user:'akshatsaini497@gmail.com',
//             pass:'jmixhjpaazfzoibe'
//         }
//     })
//     let info=transporter.sendMail({
//         from:'akshatsaini497@gmail.com',
//         to:email,
//         subject:'Thanks message from club7 gym&spa',
//         text:"Welcome to club7 Gym&spa. We appreciate your decision in joining our club. Please let us help you succeed with your goals. We understand the challenges individuals face when deciding to start working out. For the majority, simply the question of how to exercise is the most common, for others, finding the time to workout can become the biggest obstacle. At club7 Gym, we understand these questions and challenges and will dedicate all our resources to help you lose weight and reach your goals. Here at club7 Gym, you will have a great time working out with friends, while getting in the best shape of your life."
//     })

//     if(info){
//         res.send('SUCCESSFULL')
//     }
//  })

//  app.listen(5000)