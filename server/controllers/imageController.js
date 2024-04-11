const gestures = require('../models/gestures');
const mongoose = require('mongoose');

const getAllImage = async (req, res) => {
    try {
        const images = await gestures.find({}).sort({createdAt: -1});
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const createUrl = async (req, res) => {
    const { url } = req.body;

    try {
        // const newGesture = await gestures.create({ url });
        res.status(200)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllImage,
    createUrl
}
