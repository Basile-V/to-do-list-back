class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    createUserService(username, role, callback) {
        if (!['admin', 'user'].includes(role)) {
            throw new Error("The specified role is invalid.");
        }
        this.userRepository.createUserRepository(username, role, callback);
    }

    getAllUsersService(callback) {
        this.userRepository.getAllUsersRepository(callback);
    }

    getUserByIdService(user_id, callback) {
        this.userRepository.getUserByIdRepository(user_id, callback);
    }
}

module.exports = UserService;
