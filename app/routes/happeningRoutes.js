const express = require('express');
const HappeningController = require('../controllers/happeningController');

const router = express.Router();

function createHappeningRoutes(happeningController) {
    router.post('/happenings', happeningController.createHappening.bind(happeningController));
    router.get('/happenings', happeningController.getAllHappenings.bind(happeningController));
    router.get('/happenings/:happening_id', happeningController.getHappeningById.bind(happeningController));

    return router;
}

module.exports = createHappeningRoutes;
