const express= require('express')
const path= require('path')

const app= express()

//set up static middleware
app.use(express.static('./public'))

// app.get('/',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar/index.html'))
//     adding to static assets
//     server side rendering SSR
// })

app.all('*',(req,res)=>{
    res.status(404).send('<h1>resources are not found</h1>')
})

app.listen(5000,()=>{
    console.log('server is listning');
})


// app.get('/about',(req,res)=>{
//     res.send('about pages')
// })