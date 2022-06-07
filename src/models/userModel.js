const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName: String,
    AuthorName: String,
    Category: string,
     year: Number
    
}, { timestamps: true });

module.exports = mongoose.model('User', BookSchema) //users



// String, Number
// Boolean, Object/json, array