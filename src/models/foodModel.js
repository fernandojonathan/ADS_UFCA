const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expirationDate: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;