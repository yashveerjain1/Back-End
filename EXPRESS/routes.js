const express =require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send("Home Page");
})






// getting products 
app.get('/products',(req,res)=>{
    const products=[
        {
            id:1,
            name: "product 1",
        }, {
            id:2,
            name: "product 2",
        }, {
            id:3,
            name: "product 3",
        }

    ]
    res.json(products)
})


// get a single product with the help of dynamic routing
// ? ( : ) colon helps to make the dynamic routes 

app.get('/products/:id',(req,res)=>{
    console.log('Product id',req.params);
    
    const productId=parseInt(req.params.id)
    const products=[
        {
            id:1,
            name: "product 1",
        }, {
            id:2,
            name: "product 2",
        }, {
            id:3,
            name: "product 3",
        }]
        const getSingleProducts=products.find((product)=>product.id===productId)
        if(getSingleProducts)
            res.json(getSingleProducts)
        else{
            res.status(404).send('product is not found')
        }
})
// we can use any name at the place of id but it should be relevent




const port=3000;
app.listen(port,()=>{
    console.log(`Appp is running on ${port}`);
    
})


