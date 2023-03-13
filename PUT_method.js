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


app.put('/api/people/:id',(req,res)=>{
    const{ id }=req.params
    const{ name }=req.body
    
    const person=people.find((person)=>person.id=== Number(id))
    if(!person){
        res.status(400).json({sucess:false,msg:`No person with this id ${id}`})
    }
    const newpeople=people.map((person)=>{
        if(person.id === Number(id)){
            person.name=name
        }
        return person
    })
     res.status(200).json({sucess:true,data:newpeople})
})


app.listen(5000,()=>{
    console.log("server is listining in port 5000........");
})