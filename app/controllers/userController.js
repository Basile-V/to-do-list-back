class UserController {
    constructor(userService) {
        this.userService = userService;
    }

    createUser(req, res) {
        const { username, role } = req.body;

        this.userService.createUserService(username, role, (err, newUser) => {
            if (err) {
                return res.status(500).json({ error: 'Error creating user.' });
            }
            res.status(201).json(newUser);
        });
    }

    getAllUsers(req, res) {
        this.userService.getAllUsersService((err, users) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving users.' });
            }
            if (users.length === 0 ) {
                return res.status(204);
            }
            res.status(200).json(users);
        });
    }

    getUserById(req, res) {
        const { user_id } = req.params;
        this.userService.getUserByIdService(user_id, (err, user) => {
            if (err) {
                console.error(err.message);
                return res.status(500).json({ error: 'Error retrieving user.' });
            }
            if (!user) {
                return res.status(404).json({ error: 'Feeling not user.' });
            }
            res.json(user);
        });
    }
}

module.exports = UserController;
