const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    group_id: {
        required: true,
        type: Number
    },
    description: {
        required: false,
        type: String
    }
})

module.exports = mongoose.model('Notes', dataSchema)