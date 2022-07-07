import User from "../models/user.model.js";

export const createUser = (userData) => {
    try {
        const user = new User(userData);
        return user.save();
    } catch (error) {
        throw new Error("Fail when try to create User");
    }
};

export const findUser = (userData) => {
    try {
        return User.findOne({ login: userData.login });
    } catch (error) {
        throw new Error("Fail when try to login");
    }
};
