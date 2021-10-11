import User from "../models/User.js";
import tokenHandler from "../lib/token.js";

export default {
    readAll: async function (req, res, next) {
        try {
            const result = await User.readAll();
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },
    readOne: async function (req, res, next) {
        try {
            const result = await User.readOne(req.params.userID);
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },
    login: async (req, res, next) => {
        try {
            const user = await User.login(req.body);

            const token = tokenHandler.createToken(user);

            res.cookie("token", token, {
                maxAge: process.env.TOKEN_EXP * 1000,
                httpOnly: true,
            });

            res.json(user);
        } catch (error) {
            res.status(401).send();
            next(error);
        }
    },
    create: async function (req, res, next) {
        try {
            const result = await User.create(req.body);
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },
    update: async function (req, res, next) {
        try {
            const id = req.params.userID;
            // const user = await User.readOne(id);
            // user found oder not found

            // const driver = await Driver.readByUserID(id);
            // console.log("Read By User ID", driver);
            const updatedUser = req.body;
            console.log("user update body", req.body);

            const result = await User.updateByID(id, updatedUser);
            console.log("result", result)
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
    makeAdmin: async function (req, res, next) {
        try {
            const email = req.params.userEmail;
            const user = await User.findByEmail(email);
            if(user.length < 1) throw new Error("user not found")
            
            const id = user[0]._id;
            const updatedUser = req.body;

            const result = await User.updateByID(id, updatedUser);
            res.json(result);
        } catch (error) {
            next(error);
        } 
    }
};