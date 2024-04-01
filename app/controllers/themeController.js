class ThemeController {
    constructor(themeService) {
        this.themeService = themeService;
    }

    createTheme(req, res) {
        const theme = req.body;
        this.themeService.createThemeService(theme, (err, newTheme) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error creating theme.' });
            }
            res.status(201).json(newTheme);
        });
    }

    getAllThemes(req, res) {
        this.themeService.getAllThemesService((err, themes) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving themes.' });
            }
            res.json(themes);
        });
    }

    getThemeById(req, res) {
        const { theme_id } = req.params;
        this.themeService.getThemeByIdService(theme_id, (err, theme) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving theme.' });
            }
            if (!theme) {
                return res.status(404).json({ error: 'Theme not found.' });
            }
            res.json(theme);
        });
    }
}

module.exports = ThemeController;
