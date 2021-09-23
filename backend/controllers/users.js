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
            
            const result = await User.updateByID({_id: id}, updatedUser);
            console.log("result", result)
            res.json(result);
        } catch (error) {
            next(error);
        }
    },
};