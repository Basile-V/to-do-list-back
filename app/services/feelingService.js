class FeelingService {
    constructor(feelingRepository) {
        this.feelingRepository = feelingRepository;
    }

    createFeelingService(feeling, callback) {
        this.feelingRepository.createFeelingRepository(feeling, callback);
    }

    getAllFeelingsService(callback) {
        this.feelingRepository.getAllFeelingsRepository(callback);
    }

    getFeelingByIdService(feeling_id, callback) {
        this.feelingRepository.getFeelingByIdRepository(feeling_id, callback);
    }
}

module.exports = FeelingService;
