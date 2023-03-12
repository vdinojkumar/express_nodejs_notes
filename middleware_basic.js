const express=require("express")

const app=express()

const logger=(req,res,next)=>{
console.log(req.url , req.method)
next()
}


app.get('/',logger,(req,res)=>{
    res.send("hello")
})




app.listen(5000,()=>{
console.log("server is listning in port 5000...");
})