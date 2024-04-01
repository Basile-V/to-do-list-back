class HappeningService {
    constructor(happeningRepository) {
        this.happeningRepository = happeningRepository;
    }

    createHappeningService(happening, callback) {
        this.happeningRepository.createHappeningRepository(happening, callback);
    }

    getAllHappeningsService(callback) {
        this.happeningRepository.getAllHappeningsRepository(callback);
    }

    getHappeningByIdService(happening_id, callback) {
        this.happeningRepository.getHappeningByIdRepository(happening_id, callback);
    }
}

module.exports = HappeningService;
