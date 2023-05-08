const express = require('express');

const sachController = require('../controllers/sachController');

const sachRoute = express.Router();

//get all
sachRoute.get('/',sachController.getAllbook);
//get 1
//sachRoute.get('/timkiem/:id',sachController.getBookbyID);
//form get
sachRoute.get('/themsach',sachController.showFormbook);
sachRoute.post('/them',sachController.addBook);
//update
sachRoute.get('/suasach/:id',sachController.showFormupdate);
sachRoute.post('/sua/:id',sachController.updateBookbyID);
//delete
sachRoute.get('/xoa/:id',sachController.deleteBookbyID);
module.exports = sachRoute;