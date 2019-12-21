const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: String,
    author: String,
    genre: String,
    price: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);
