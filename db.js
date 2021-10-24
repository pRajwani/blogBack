const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb+srv://user:user@cluster0.y9ek7.mongodb.net/blog?retryWrites=true&w=majority');

connect.then(() => {
    console.log('Connected to Databse');
})
.catch((err) => {
    console.log(err);
})

