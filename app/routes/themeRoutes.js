const express = require('express');
const ThemeController = require('../controllers/themeController');

const router = express.Router();

function createThemeRoutes(themeController) {
    router.post('/themes', themeController.createTheme.bind(themeController));
    router.get('/themes', themeController.getAllThemes.bind(themeController));
    router.get('/themes/:theme_id', themeController.getThemeById.bind(themeController));

    return router;
}

module.exports = createThemeRoutes;
