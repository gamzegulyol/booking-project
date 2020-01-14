const mongoose = require('mongoose'); 
let date_ob = new Date();
module.exports = mongoose.model('Reservation',
    mongoose.Schema({
        id: String,
        createdAt : date_ob.getDate(),
        updatedAt : date_ob.getDate(),
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