const gestures = require('../models/gestures');
const mongoose = require('mongoose');

const getAllImage = async (req, res) => {
    const images = await gestures.find({}).sort({createdAt: -1});
    res.status(200).json(images);
}

module.exports = {
    getAllImage
}