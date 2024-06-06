import express from 'express'
import bcryt from 'bcrypt'
const router = express.Router();
import {User} from '../models/User.js';
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

router.post('/signup', async (req, res) => {
   const{username, email, password} = req.body;
    const user = await User.findOne({email})
    if(user) {
        return res.json({message: "user already existed"})
    }

    const hashpassword = await bcryt.hash(password, 10)
    const newUser = new User ({
        username,
        email,
        password: hashpassword,
    })

    await newUser.save()
    return res.json({status: true, message: "record resgisted"})
})

router.post('/login', async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})
    if(!user) {
        return res.json({message: "User is not regis"})
    }

    const validPassword = await bcryt.compare(password, user.password)
    if(!validPassword) {
        return res.json({message: "password is inorrect"}) 
    }

    const token = jwt.sign({username: user.username}, process.env.KEY, {expiresIn: '1h'})
    res.cookie('token', token, {httpOnly: true,maxAge: 360000})
    return res.json({status: true, message: "Login Sukses"})
})

router.post('/forgot-password', async(req, res) => {
    const {email} = req.body;
    try {
        const user = await User.findOne({email})
        if(!user) {
            return res.json({message: "user not registered"})
        }

        const token = jwt.sign({id: user._id}, process.env.KEY, {expiresIn: '5m'})

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'alfraka3@gmail.com',
              pass: 'wrdc tfia hmgp ztys'
            }
          });
          
          var mailOptions = {
            from: 'alfraka3@gmail.com',
            to: email,  
            subject: 'Reset Password',
            text: `http://localhost:5173/resetPassword/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              return res.json ({ message: "error"})
            } else {
             return res.json({status: true, message: "email sent"})
            }
          });
    } catch (err) {
        console.log(err)
    }
})

export {router as UserRouter}