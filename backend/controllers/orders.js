import Order from "../models/Order.js";

export default {
    readAll: async function (req, res, next) {
        try {
            const result = await Order.readAll();
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },

    readOne: async function (req, res, next) {
        try {
            const result = await Order.readOne(req.params.orderID);
            res.json({ result });
        } catch (error) {
            next(error);
        }
    },

    create: async function (req, res, next) {
        try {
            const result = await Order.create(req.body.name, req.body.detail, req.body.customerId, req.body.date, req.body.price, req.body.driver );
            res.json({result});
        } catch (error) {
            next(error);
        }
    },

    update: async function (req, res, next) {
        try {
            const id = req.params.orderID;
            const updatedOrder = req.body;
            const result = await Order.updateByID(id, updatedOrder);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            const result = await Order.deleteByID(req.params.orderID);
            res.json(result);
        } catch (error) {
            next(error);
        }
    },

    addDriverToOrder: async function (req, res, next) {
        try {
            const result = await Order.addDriverToOrder(req.params.orderID, req.body.driverID);
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