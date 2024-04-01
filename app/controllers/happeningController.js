class HappeningController {
    constructor(happeningService) {
        this.happeningService = happeningService;
    }

    createHappening(req, res) {
        const happening = req.body;
        this.happeningService.createHappeningService(happening, (err, newHappening) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error creating happening.' });
            }
            res.status(201).json(newHappening);
        });
    }

    getAllHappenings(req, res) {
        this.happeningService.getAllHappeningsService((err, happenings) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving happenings.' });
            }
            res.json(happenings);
        });
    }

    getHappeningById(req, res) {
        const { happening_id } = req.params;
        this.happeningService.getHappeningByIdService(happening_id, (err, happening) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving happening.' });
            }
            if (!happening) {
                return res.status(404).json({ error: 'Happening not found.' });
            }
            res.json(happening);
        });
    }
}

module.exports = HappeningController;
