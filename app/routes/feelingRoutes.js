const express = require('express');
const FeelingController = require('../controllers/feelingController');

const router = express.Router();

function createFeelingRoutes(feelingController) {
    router.post('/feelings', feelingController.createFeeling.bind(feelingController));
    router.get('/feelings', feelingController.getAllFeelings.bind(feelingController));
    router.get('/feelings/:feeling_id', feelingController.getFeelingById.bind(feelingController));

    return router;
}

module.exports = createFeelingRoutes;
