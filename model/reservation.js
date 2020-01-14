const mongoose = require('mongoose'); 
const Room = require('./room');
let date_ob = new Date();
module.exports = mongoose.model('Reservation',
    mongoose.Schema({
        id: String,
        createdAt : date_ob.getDate(),
        updatedAt : date_ob.getDate(),
        room:[Room.schema],
        customerName:
        {
            type:String,
            required: true,
            unique: true
        },
        customerMail:{
            type:String,
            required: true,
            unique: true
        }
        
    }));

module.exports = mongoose.model('Reservation', ReservationSchema);