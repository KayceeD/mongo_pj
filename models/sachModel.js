const mongoose = require('mongoose')

const sachSchema = new mongoose.Schema({
    masach:{
        type:String,
        required:true,
        unique:true
    },
    tensach:{
        type:String,
        required:true
    },
    theloai:{
        type:String,
        required:true
    },
    mota:{
        type:String,
        require:true
    }
},{collection:"sach"})

module.exports = mongoose.model('sach',sachSchema);