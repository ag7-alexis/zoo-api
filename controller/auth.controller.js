import Bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import * as UserService from "../services/user.service.js";

export const register = async (req, res) => {
    const login = req.body.login;
    const password = Bcrypt.hashSync(req.body.password, 10);
    try {
        const user = await UserService.createUser({
            login,
            password,
        });
        return res.status(201).send(user);
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
};

export const login = async (req, res) => {
    const {login, password} = req.body;
    const secret = process.env.SECRET;
    try {
        const user = await UserService.findUser({
            login,
            password,
        });

        if (!user) {
            return res.status(400).send({ message: "The username is invalid" });
        }
        if(!Bcrypt.compareSync(req.body.password, user.password)) {
            return res.status(400).send({ message: "The password is invalid" });
        }

        const accessToken = jwt.sign({
            username: user.username,
            id: user._id
        }, secret);

        res.cookie("access_token", accessToken, { httpOnly: true });
        return res.json({
            accessToken
        })
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: error });
    }
};