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

app.get('/product1/:productID',(req,res)=>{

    const {productID}=req.params;
    const singleprod=products.find((product)=> product.id===Number(productID))
    if(!singleprod){
        return res.status(404).send('Product does not exits')
    }
    res.json(singleprod)
})


app.get('/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)

    res.send("hello world")
})


app.get('/api/v1/query',(req,res)=>{
    const{search,limit}=req.query
    
    let sortedProducts=[...products]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
        if(limit){
            return sortedProducts=sortedProducts.slice(0,Number(limit))
        }
        if(sortedProducts.length<1){
            // res.status(200).send('no products are availabe')
           return res.status(200).json({sucess:true, data:[]})
        }
        res.status(200).json(sortedProducts)
    }

})





app.listen(5000,()=>{
    console.log('server is listning in port number 5000.....');
}) 