const express=require('express');
const { title } = require('process');
const path=require('path');
const app=express();


// set the view engine as ejs 
app.set('view engine','ejs')

// set the directory for the views 

app.set('views',path.join(__dirname,'views'))


const products=[
    {
        id:1,
        title:'Product 1'
    },
    {
        id:2,
        title:'Product 2'
    },
    {
        id:3,
        title:'Product 3'
    }
];

app.get('/',(req,res)=>{
    res.render('home',{title:'Home',products:products})
});


app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'})
})

const port=3000;

app.listen(port,()=>{
    console.log("server is runniing on 3000 port");
    
})