const { log } = require('console');
const http =require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url=='/'){
        console.log("Home PAge");
        res.end("Home Page");
        
    }
    else if(url==='/about'){
        res.end(`About Page `);
        console.log('About Page');
    }
    else{
        res.end(`404 Error Page is not Found `);
        console.log('Page not Found');
        
    }
})


const port=3000

server.listen(port,()=>{
    console.log(`Server is listening on port number ${port}`);
    
})