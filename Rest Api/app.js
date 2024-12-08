const express=require('express');
const app=express();

const port=3000;
app.use(express.json());

// basically we dont use their database so we do like this

let books=[
    {
        id:'1',
        title:'Book 1'
    },
    {
        id:'2',
        title:'Book 2'
    }
]
// get all books 

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to our bookstore',
    });
    
})
// get all books
app.get ('/get',(req,res)=>{
    res.json(books);
})

// get a single book

app.get('/get/:id',(req,res)=>{
    const book=books.find(item=>item.id===req.params.id);
    if(book){
        res.status(200).json(book);
    }
    else{
        res.status(404).json({
            message:'Book Not found! Please try another one ',
        })
    }
})


// add new book
app.post('/add',(req,res)=>{
    const newBook={
        id:books.length+1,
        title:`Book ${books.length+1}`
    }
    books.push(newBook);
    res.status(200).json({
        data:newBook,
        message:'New book is added'
    })
})

// update the book 
app.put('/update/:id',(req,res)=>{
    const findCurrentBook=books.find(item=>item.id===req.params.id);
    if(findCurrentBook)
    {
        findCurrentBook.title=req.body.title||findCurrentBook.title

        res.status(200).json({
            message:"Book Updated successfully",
            data:findCurrentBook
        })

    }
    else{
        res.status(404).json({
            message:`Error `
        })
    }
})

// delete the book
app.delete('/delete/:id',(req,res)=>{
    const findIndexCurrenIndex=books.findIndex(item=>item.id===req.params.id);
    if(findIndexCurrenIndex!==-1)
    {
        const deleteBook=books.splice(findIndexCurrenIndex);
        res.status(200).json({
            message:'Book Deleted',
            data:deleteBook[0]
        })

    }
    else{
        res.status(404).json({
            message:`Error `
        })
    }
})



app.listen(port,()=>{
    console.log(`server is running on ${port}`);    
})