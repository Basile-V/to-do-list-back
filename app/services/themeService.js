class ThemeService {
    constructor(themeRepository) {
        this.themeRepository = themeRepository;
    }

    createThemeService(theme, callback) {
        this.themeRepository.createThemeRepository(theme, callback);
    }

    getAllThemesService(callback) {
        this.themeRepository.getAllThemesRepository(callback);
    }

    getThemeByIdService(theme_id, callback) {
        this.themeRepository.getThemeByIdRepository(theme_id, callback);
    }
}

module.exports = ThemeService;
