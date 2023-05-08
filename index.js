// Thêm thư viện
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');

//env var
require('dotenv').config();

//thêm module
const DBconnect = require('./config/DBconnect');
//định tuyến
const sachRoute = require('./routes/sachRoute');
const tacgiaRoute = require('./routes/tacgiaRoute');

//khỏi động express
const app = express();

//kết nối DB
DBconnect();

//parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//using template engine
app.set('views');
app.set('view engine','ejs');

//route
app.use('/sach',sachRoute);
app.use('/tacgia',tacgiaRoute);

//middleware
app.use((req,res,next) => {
    console.log(req.path,req.method);
    next();
})

//gọi đến đường dẫn trống
app.get('/',(req,res) => {
    res.render('index');
});


//mở cổng nghe client
app.listen(process.env.PORT,() => {
    console.log(`App running on port ${process.env.PORT}`);
});
