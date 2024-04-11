const express = require('express');
const { getAllImage, createUrl } = require('../controllers/imageController');
const router = express.Router();

// GET all images.
router.get('/', getAllImage);

// POST a new image URL.
router.post('/get_photos', createUrl);

module.exports = router;
