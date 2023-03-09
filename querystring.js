const express= require('express')
const path=require('path')

const app= express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home page </h1><a href="/products">Product</a>')
})

app.get('/products',(req,res)=>{
    const newProducts=products.map((product)=>{
        const{name,image,id}=product
        return{id,image,name}
    })
    res.json(newProducts)
})

app.get('/product/:productID',(req,res)=>{
    const singleprod=products.find((product)=> product.id===1)
    res.json(singleprod)
})

app.listen(5000,()=>{
    console.log('server is listning in port number 5000.....');
}) 