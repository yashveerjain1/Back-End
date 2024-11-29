const http=require('http');

const server=http.createServer((req,res)=>{
    console.log(req,'req');
    res.send("Hello World, This is Home Page "); 
})


const port=3000;


server.listen(port,()=>{
    console.log(`Server is listening on the port ${port}`);
    
})