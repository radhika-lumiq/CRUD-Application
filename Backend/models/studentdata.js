const mongoose =require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    roll: {
        type: String,
        required: true,
        unique: true,    
    },
    course: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
     phone :{
        type : Number,
        required :true,
     },
    // registered_on: {
    //     type: Date,
    //     default: new Date(),
    // },

})

var studentdata=mongoose.model('studentdata',studentSchema);
module.exports= studentdata;