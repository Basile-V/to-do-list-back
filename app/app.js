const express = require('express');
const createUserRoutes = require('./routes/userRoutes');
const UserService = require('./services/userService');
const UserRepository = require('./repositories/userRepository');
const UserController = require('./controllers/userController');
const db = require("./config/db");
const TaskRepository = require("./repositories/taskRepository");
const TaskService = require("./services/taskService");
const TaskController = require("./controllers/taskController");
const ThemeRepository = require("./repositories/themeRepositories");
const ThemeService = require("./services/themeService");
const ThemeController = require("./controllers/themeController");
const GoalRepository = require("./repositories/goalRepository");
const GoalService = require("./services/goalService");
const GoalController = require("./controllers/goalController");
const createTaskRoutes = require("./routes/taskRoutes");
const createThemeRoutes = require("./routes/themeRoutes");
const createGoalRoutes = require("./routes/goalRoute");
const createFeelingRoutes = require("./routes/feelingRoutes");
const FeelingRepository = require("./repositories/feelingRepository");
const FeelingService = require("./services/feelingService");
const FeelingController = require("./controllers/feelingController");
const createHappeningRoutes = require("./routes/happeningRoutes");
const HappeningController = require("./controllers/happeningController");
const HappeningService = require("./services/happeningService");
const HappeningRepository = require("./repositories/happeningRepository");

const app = express();
const port = 3000;

const feelingRepository = new FeelingRepository(db);
const feelingService = new FeelingService(feelingRepository);
const feelingController = new FeelingController(feelingService);

const goalRepository = new GoalRepository(db);
const goalService = new GoalService(goalRepository);
const goalController = new GoalController(goalService);

const happeningRepository = new HappeningRepository(db);
const happeningService = new HappeningService(happeningRepository);
const happeningController = new HappeningController(happeningService);

const taskRepository = new TaskRepository(db);
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

const themeRepository = new ThemeRepository(db);
const themeService = new ThemeService(themeRepository);
const themeController = new ThemeController(themeService);

const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const feelingRoutes = createFeelingRoutes(feelingController);
app.use(express.json());
app.use('/api', feelingRoutes);

const goalRoutes = createGoalRoutes(goalController);
app.use(express.json());
app.use('/api', goalRoutes);

const happeningRoutes = createHappeningRoutes(happeningController);
app.use(express.json());
app.use('/api', happeningRoutes);

const taskRoutes = createTaskRoutes(taskController);
app.use(express.json());
app.use('/', taskRoutes);

const themeRoutes = createThemeRoutes(themeController);
app.use(express.json());
app.use('/', themeRoutes);


const routes = createUserRoutes(userController);
app.use(express.json());
app.use('/', routes);


app.listen(port, () => {
    console.log(`Le serveur est lancé sur le port ${port}`);
});
