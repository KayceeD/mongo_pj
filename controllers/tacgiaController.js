const tacgiaModel = require('../models/tacgiaModel');

const getAlltacgia = async(req,res) => {
    const data = await tacgiaModel.find();
    return res.render('tacgiaViews/xemtacgia',{tacgias:data});
}

const showFormtacgia = (req,res) => {
    res.render('tacgiaViews/themtacgia',{});
}

const showFormupdate = async(req,res) => {
    const data = await tacgiaModel.findById(req.params.id);
    return res.render('tacgiaViews/suatacgia',{tacgia:data});
}

const addTacgia = async(req,res) => {
    try {
        await tacgiaModel.create(req.body);
        console.log('created');
        res.redirect('/tacgia');
    } catch (error) {
        console.log(error.message);
    }  
}

const updateTacgiabyID = async(req,res) => {
    try {
        await tacgiaModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        console.log(req.body);
        console.log('updated');
        res.redirect('/tacgia');
    } catch (error) {
        console.log(error.message);
    }
}


const deleteTacgiabyID = async(req,res) => {
    try {
        await tacgiaModel.findByIdAndRemove(req.params.id);
        console.log('deleted');
        res.redirect('/tacgia');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAlltacgia,
    showFormtacgia,
    showFormupdate,
    addTacgia,
    updateTacgiabyID,
    deleteTacgiabyID
}
