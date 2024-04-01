const express = require('express');
const GoalController = require('../controllers/goalController');

const router = express.Router();

function createGoalRoutes(goalController) {
    router.post('/goals', goalController.createGoal.bind(goalController));
    router.get('/goals', goalController.getAllGoals.bind(goalController));
    router.get('/goals/:goal_id', goalController.getGoalById.bind(goalController));

    return router;
}

module.exports = createGoalRoutes;
