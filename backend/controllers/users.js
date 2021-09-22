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
            // const id = req.params.userID;
            // const user = await User.readOne(id);
            // user found oder not found
            // const driver = await Driver.readByUserID(id);
            // console.log("Read By User ID", driver);
            const ord = [];
            console.log("body", req.body);
            ord.push(req.body.orders);
            // const updatedDriver = req.body;
            const result = await User.updateByID(req.params.userID, { orders: ord });
            res.json(result);
            // res.json("hier");
        } catch (error) {
            next(error);
        }
    },
};