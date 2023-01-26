import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import postRoute from "./routes/post.js";

const app = express();


app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use(cors())
app.use("/posts",postRoute);

const DBURL = "mongodb+srv://praveen_kanth:test123@cluster0.ounea9f.mongodb.net/?retryWrites=true&w=majority";
const port = process.env.PORT || 5000;
mongoose.connect(DBURL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{app.listen(port,()=>console.log("Server is running on port: ",port))})
    .catch((err)=>{console.log(err)})

// mongoose.set("useFindAndModify",false)


// BODY PARSER
/*
    1)body-parser is an npm module used to process data sent in an HTTP request body.
    2)Before parsing, it was just a regular string that could not access the data encoded inside, 
       but after parsing, it becomes a javascript object
    3) usually helps when you need to know more than just the URL being hit.
*/

// CORS
/*
    1)CORS stands for “Cross-Origin Resource Sharing”
    2)allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, 
    hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources.

*/
