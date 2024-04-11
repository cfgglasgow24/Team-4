const mongoose = require('mongoose');
const schema = mongoose.Schema;

const gestures = new schema({
    gestureImage: {
        type: [String],
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('ImageUrl', gestures);