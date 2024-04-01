class GoalController {
    constructor(goalService) {
        this.goalService = goalService;
    }

    createGoal(req, res) {
        const goal = req.body;
        this.goalService.createGoalService(goal, (err, newGoal) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error creating goal.' });
            }
            res.status(201).json(newGoal);
        });
    }

    getAllGoals(req, res) {
        this.goalService.getAllGoalsService((err, goals) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving goals.' });
            }
            res.json(goals);
        });
    }

    getGoalById(req, res) {
        const { goal_id } = req.params;
        this.goalService.getGoalByIdService(goal_id, (err, goal) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving goal.' });
            }
            if (!goal) {
                return res.status(404).json({ error: 'Goal not found.' });
            }
            res.json(goal);
        });
    }
}

module.exports = GoalController;
