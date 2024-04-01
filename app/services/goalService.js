class GoalService {
    constructor(goalRepository) {
        this.goalRepository = goalRepository;
    }

    createGoalService(goal, callback) {
        this.goalRepository.createGoalRepository(goal, callback);
    }

    getAllGoalsService(callback) {
        this.goalRepository.getAllGoalsRepository(callback);
    }

    getGoalByIdService(goal_id, callback) {
        this.goalRepository.getGoalByIdRepository(goal_id, callback);
    }
}

module.exports = GoalService;
