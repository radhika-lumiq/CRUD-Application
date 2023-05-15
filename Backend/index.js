const express= require('express');
const mongoose= require('mongoose');
const cors = require('cors');

const app=express();

const port=9000;
const url= "mongodb://127.0.0.1:27017/DB";

mongoose.connect(url,{useNewUrlParser: true}, {useCreateIndex: false});

const con= mongoose.connection;

// con.collection('studentdatas').createIndexes([ {registration_1: 1} ,{ unique: true }], function(err, result) {
//     // handle errors or results here
//     if(err)
//     console.log("error");
//     else
//     console.log("inserted data");
//   });
  
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

app.use(cors());
const studentrouter= require("./routes/students");
app.use('/students',studentrouter)



app.listen(port, () =>{
    console.log('Server started');
})

