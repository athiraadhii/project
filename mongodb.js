const mongoose = require("mongoose");
let compus_url = 'mongodb://localhost:27017/sampledb';
let mongodb_url = 'mongodb+srv://athira:athira979@cluster0.dw3beco.mongodb.net/athiradb?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(mongodb_url).then(()=>{

    console.log("db connected");
})
 
.catch((err)=>{
    console.log(err);
});