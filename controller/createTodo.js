//import th model
const Todo = require('../models/Todo');

exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from req's body
        const {title,description} = req.body;
        //validation
        if(!title || !description){
            return res.status(500).json({
                success:false,
                message:"all field required"
            })
        }
        //create a new Todo obj and insert in DB
        const response = await Todo.create({title,description});
        //send a json response with a success flag
        res.status(200).json({
            success:true,
            data:response,
            message:'Entry created successfully',
        })
    }
    catch(err){
        console.error("error is in create to do : ",err.message);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}