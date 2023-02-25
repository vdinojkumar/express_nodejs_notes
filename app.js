const http=require('http')
const {readFileSync}= require('fs')


//all files
const homePage= readFileSync('./index.html')
const homeStyles= readFileSync('./styles.css')
const homeImage= readFileSync('./download.png')
const homeLogic= readFileSync('./browser-app.js')

const server= http.createServer((req,res)=>{
   
    const url=req.url

    //home page
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write(homePage)
        res.end()
        
    }

    //styles
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'})
        res.write(homeStyles)
        res.end()
    }

    //logo
    else if(url==='/download.png'){
        res.writeHead(200,{'content-type':'image/png'})
        res.write(homeImage)
        res.end()
    }
    // java script
    else if('/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    
    console.log(url);

})

server.listen(5000)