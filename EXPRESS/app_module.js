const express =require('express');
const app=express();


// application level settingd 

app.set('view Engine','ejs');

//routing
app.get('/',(req,res)=>{
    res.send("Home page");
})


app.post('api/data',(req,res)=>{
    res.json({
        message:'Data Received',
        data:req.body
    })
})


app.use((err,req,res,next)=>{
    console.log(err.stack);
    res.status(500).send('Something Went wrong');
      
})



