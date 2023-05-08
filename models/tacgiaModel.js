const mongoose = require('mongoose')

const tacgiaSchema = new mongoose.Schema({
    matacgia:{
        type:String,
        required:true,
        unique:true
    },
    tentacgia:{
        type:String,
        required:true
    },
    namsinh:{
        type:Number,
        required:true
    },
    ghichu:{
        type:String,
        require:true
    }
},{collection:"tacgia"})

module.exports = mongoose.model('tacgia',tacgiaSchema);