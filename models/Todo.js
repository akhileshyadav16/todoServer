const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50,
        },
        description:{
            type:String,
            required:true,
            maxLength:100,
        },
        createdAt:{
            type:Date,
            required:true,
            default:Date.now,
        },
        completed:{
            type:Boolean,
            default:false
        }
    }
);

module.exports = mongoose.model('Todo',todoSchema);