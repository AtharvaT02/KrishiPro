const express = require('express')
const app = express()
const cors =  require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/krishinetproject')

app.post('/api/register',async (req,res) =>{
    try{
        await User.create({
            email: req.body.email,
            gender: req.body.gender,
            password: req.body.password,
        })
        
        res.json({status:'ok'})
    }
    catch(err){
        console.log(err)
        res.json({status:'error' , error:'Duplicate Email'})
    }
    
})
app.post('/api/login',async (req,res) =>{
        console.log(req.body)
        const user = await User.findOne(
            {email: req.body.email,
            password: req.body.password,
            })
        
    
    if(user){

        const token  = jwt.sign({
            email: req.email,
        }, 'krishinetsecret')
        return res.json({status:'ok' , user: true})
    }else{
        return res.json({status:'error' , user: false})
    }
})

app.listen(8081 ,() =>{
    console.log('server started on 8081')
})