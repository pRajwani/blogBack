const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    created: {
        type: Date,
    },
    status: {
        type: String,
        default:'Active'
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
}, {
    timestamps:true
});

module.exports = mongoose.model('blog', BlogSchema);