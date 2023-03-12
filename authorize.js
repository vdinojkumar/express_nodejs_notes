const authorize=(req,res,next)=>{
const {user}=req.query;
if(user==='dinoj'){
    req.user={name:'dinoj', id:3}
    next()
}else{
    res.status(401).send("unauthorised")
    next()
}

    console.log("auhtorize")
    next()
}

module.exports=authorize