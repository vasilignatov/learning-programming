const mongoose = require('mongoose');

const toySchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minlength: [10, 'The Title should be at least 10 characters!']
    },
    charity: {
        type: String,
        required: [true, 'Charity is required!'],
        minlength: [2, 'The Charity should be at least 2 characters!']
    },
    image: {
        type: String,
        required: [true, 'Image is required!'], 
        validate: {
            validator: function (v) {
                return /^https?:\/\//.test(v);
            },
            message: `The Toy Image should start with http:// or https://!`
        }
    },
    description: {
        type: String,
        required: [true, 'Description Review field is required'],
        minlength: [10, 'The Description should be a minimum of 10 characters long!'],
        maxlength: [100, 'The Description should be a maximum of 100 characters long!']
    },
    category: {
        type: String,
        required: [true, 'Category is required!'],
        minlength: [5, 'The Category should be a minimum of 5 characters long!']
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        min: [0, 'The Price should be a positive number!']
    },
    buyingList: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'User'
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });



const Toy = mongoose.model('Toy', toySchema);

module.exports = Toy;