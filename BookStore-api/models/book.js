const mongoose=require('mongoose');

const bookSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'Book Title is Compulasory '],
        trim:true,
        maxlength:[100,'Book title cannot exceed from 100 cahracterr '],
    },
    author:{
        type:String,
        required:[true,'Author Name  is Compulasory '],
        trim:true,
    },
    year:{
        type:Number,
        required:[true,'Publication year is required'],
        min:[1000,'year must be atleast 1000'],
        maxlength:[new Date().getFullYear(),'Year Cannot be in the future ']
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

module.exports=mongoose.model("Book",bookSchema);