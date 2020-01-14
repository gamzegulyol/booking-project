const mongoose = require('mongoose'); 

module.exports = mongoose.model('Room',
    mongoose.Schema({
        id: String,
        type: String,
        capacity:Number,
        imgUrl:String,
        price:Number
    }));

module.exports = mongoose.model('Room', RoomSchema);