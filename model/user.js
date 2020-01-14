const mongoose = require('mongoose');

module.exports = mongoose.model('User',
    mongoose.Schema({
        id:String,
        name:String,
        surname:String,
        mail: String,
        phone:String
    })

)
module.exports = mongoose.model('User', UserSchema);