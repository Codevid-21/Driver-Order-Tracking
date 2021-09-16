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
            res.json({ msg: "Read One Success" });
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
            res.json({ msg: "Update Success" });
        } catch (error) {
            next(error);
        }
    },

    delete: async function (req, res, next) {
        try {
            res.json({ msg: "Delete Success" });
        } catch (error) {
            next(error);
        }
    },
};