class FeelingController {
    constructor(feelingService) {
        this.feelingService = feelingService;
    }

    createFeeling(req, res) {
        const feeling = req.body;
        this.feelingService.createFeelingService(feeling, (err, newFeeling) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error creating feeling.' });
            }
            res.status(201).json(newFeeling);
        });
    }

    getAllFeelings(req, res) {
        this.feelingService.getAllFeelingsService((err, feelings) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving feelings.' });
            }
            res.json(feelings);
        });
    }

    getFeelingById(req, res) {
        const { feeling_id } = req.params;
        this.feelingService.getFeelingByIdService(feeling_id, (err, feeling) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving feeling.' });
            }
            if (!feeling) {
                return res.status(404).json({ error: 'Feeling not found.' });
            }
            res.json(feeling);
        });
    }
}

module.exports = FeelingController;
