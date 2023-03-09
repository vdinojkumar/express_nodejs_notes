const express= require('express')
const path=require('path')

const app= express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page </h1><a href="/products">Product</a>')
})

app.get('/products',(req,res)=>{
    
    res.json(products)
})



app.listen(5000,()=>{
    console.log('server is listning in port number 5000.....');
}) 