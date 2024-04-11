const express = require('express')
const {
    getAllImage,
} = require('../controllers/imageController');
const router = express.Router()


// GET all sites.
router.get('/', getAllSites);
