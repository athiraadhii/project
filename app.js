const express = require("express");
const morgan = require("morgan");
const db = require("./mongodb")
const studentRoute = require('./routes/stuRoute');


const app = new express();
app.use (morgan('dev'));
app.use('/api',studentRoute)



app.listen(3000,()=>{
    console.log("listen to port 3000")
})