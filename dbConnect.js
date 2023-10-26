const mongoose = require('mongoose')

const URL = 'mongodb+srv://rfqiadm:Rifqiadam1501@cluster0.6hrizfp.mongodb.net/smart_resume'

mongoose.connect(URL , {useUnifiedTopology:true, useNewUrlParser:true})

const connection = mongoose.connection

connection.on('connected' , ()=> {
    console.log('Mongo DB Connection Successfully')
})
connection.on('error', ()=>{
    console.log(error)
})