//get 
const express=require('express')
const app= express()
let {people}=require('./data')
app.use(express.json())

app.use(express.static('./methods-public'))


app.use(express.urlencoded({extended:false}))



app.get('/api/people',(req,res)=>{
res.status(200).json({sucess:true,data:people})
})



app.post('/api/postman/people',(req,res)=>{
    const {name}=req.body
    if(!name){
        res.status(400).json({sucess:false,msg:'invalid data'})
    }
    res.status(201).json({sucess:true, data:[...people,name]})
})



app.post('/api/people',(req,res)=>{
   const{name}=req.body
   if(! name){
    return res.status(400).json({sucess:false , msg:"please provide valid data"})
   }
   res.status(201).json({sucess:true,person:name})
})

app.post('/login',(req,res)=>{
    const{name}=req.body
    if(name){
       return res.status(200).send(`welcome ${name}`);
    }
    res.status(404).send("provide the credendials")
})


app.listen(5000,()=>{
    console.log("server is listining in port 5000........");
})