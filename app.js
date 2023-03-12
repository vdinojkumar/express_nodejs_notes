const express=require('express')
const app=express()
const logger=require('./logger')
const authorize=require('./authorize')


//middleware function
//path specifies , middleware to invoke when it hits that path
// ****app.use('/api',logger)
// it is applied to all the req 
// to use mutiple middleware we use array 
app.use([logger,authorize])


app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/about',(req,res)=>{
    res.send('about')
})

app.get('/api/product',(req,res)=>{
    res.send('product')
})

app.get('/api/desc',(req,res)=>{
    res.send('about')
})



app.listen(5000,()=>{
    console.log("server is listining in port 50000");
})