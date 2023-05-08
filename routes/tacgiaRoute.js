const express = require('express')
const tacgiaRoute = express.Router();

const tacgiaController = require('../controllers/tacgiaController');

tacgiaRoute.get('/',tacgiaController.getAlltacgia);

tacgiaRoute.get('/themtacgia',tacgiaController.showFormtacgia);
tacgiaRoute.post('/them',tacgiaController.addTacgia);

tacgiaRoute.get('/suatacgia/:id',tacgiaController.showFormupdate)
tacgiaRoute.post('/sua/:id',tacgiaController.updateTacgiabyID);

tacgiaRoute.get('/xoa/:id',tacgiaController.deleteTacgiabyID);

module.exports = tacgiaRoute