import User from "../models/User.js";

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
    }
};