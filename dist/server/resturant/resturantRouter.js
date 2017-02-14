'use strict';
let express = require('express');
let router = express.Router();

// let Resturant = require('./resturantEntity.js');
let resturantController = require('./resController.js');

// Get all resturant
router.get('/get', resturantController.Getresturant);

// Create new resturant
router.post('/add', resturantController.Postresturant);

// Delete a resturant based on :id
router.delete('/delete/:id', resturantController.Deleteresturant);

// Update a resturant based on :id
router.put('/update/:id', resturantController.Updateresturant);

module.exports = router;