const express= require('express')

const app= express()
 const {product}=require('./data')

app.get('/',(req,res)=>{
    res.json([
        {name:'dinoj'},
        {name:'manoj'}
    ])
})

app.listen(5000,()=>{
    console.log('server is listning in port number 5000.....');
})