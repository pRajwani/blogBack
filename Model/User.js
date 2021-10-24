const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    role: {
        type: String,
        required: true
    },
    dob: {
        type: Date
    },
    password: {
        type: String,
        required: true
    }
})

UserSchema.set('toJSON', {
    versionKey: false,
    transform: (document, returnObject) => {
        delete returnObject.password
    }
});

module.exports = mongoose.model('user',UserSchema);