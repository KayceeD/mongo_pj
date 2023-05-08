const sachModel = require('../models/sachModel')

const getAllbook = async(req,res) => {
    const data = await sachModel.find();
    return res.render('sachViews/xemsach',{books:data});
}

// const getBookbyID = async(req,res) => {
//     const {id} = req.params;
//     const data = await sachModel.findById(id);
//     if(!data){
//         return res.json({error:"cant't find"})
//     }
//     return res.json(data);
// }

const showFormbook = (req,res) => {
    res.render('sachViews/themsach',{});
}

const showFormupdate = async(req,res) => {
    const data = await sachModel.findById(req.params.id);
    return res.render('sachViews/suasach',{book:data});
}

const addBook = async(req,res) => {
    try {
        await sachModel.create(req.body);
        console.log('created');
        res.redirect('/sach');
    } catch (error) {
        console.log(error.message);
    }  
}

const updateBookbyID = async(req,res) => {
    try {
        await sachModel.findByIdAndUpdate(req.params.id,req.body,{new:true});
        console.log(req.body);
        console.log('updated');
        res.redirect('/sach');
    } catch (error) {
        console.log(error.message);
    }
}


const deleteBookbyID = async(req,res) => {
    try {
        await sachModel.findByIdAndRemove(req.params.id);
        console.log('deleted');
        res.redirect('/sach');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    getAllbook,
    // getBookbyID,
    showFormbook,
    showFormupdate,
    addBook,
    updateBookbyID,
    deleteBookbyID
}