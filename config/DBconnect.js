const mongoose = require('mongoose');

const DBconnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB connected');
    } catch (error) {
        console.log(error.message);
        console.log('Error connect');
    }
}

module.exports = DBconnect