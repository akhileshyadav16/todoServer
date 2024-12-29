const dbConnect = require('./config/database');
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const app = express();

//load config from env file

const PORT = process.env.PORT || 4000;

//middleware to parse req body
app.use(express.json());


app.use(cors({
    origin: [process.env.FE_URL],
    methods: "POST,GET,PUT,DELETE",
    credentials: true,
}));

//import routes for Todo API
const todoRoutes = require('./routes/todos');

app.use("/api/v1",todoRoutes);



app.listen(PORT,()=>{
    console.log("Server started successfully at "+PORT);
});

app.get("/",(req,res)=>{
    res.json("Hello")
})

dbConnect();
