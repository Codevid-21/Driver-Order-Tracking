import Driver from "../models/Driver.js";
import User from "../models/User.js";

export default {
    readAll: async function (req, res, next) {
        try {
            const result = await Driver.readAll();
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },

    readOne: async function (req, res, next) {
        try {
            const result = await Driver.readOne(req.params.driverID);
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },

    create: async function (req, res, next) {
        try {
            const result = await Driver.create(req.body.userID);
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },

    update: async function (req, res, next) {
        try {
            const id = req.params.driverID;
            const updatedDriver = req.body;


            const result = await Driver.updateByID(id, updatedDriver);
            res.json(result);
            // res.json("hier");
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            const result = await Driver.deleteByID(req.params.orderID);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    addOrderToDriver: async function (req, res, next) {
        try {
            const result = await Driver.addOrderToDriver(req.params.orderID, req.body.driverID);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    // markArticleAsRead: async function (req, res, next) {
    //     try {
    //         const result = await User.markArticleAsRead(req.params.userId, req.params.articleId);
    //         res.json(result);
    //     } catch (error) {
    //         next(error);
    //     }
    // },

};