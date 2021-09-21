import mongoose from "mongoose";
import User from "./User.js";

const Schema = mongoose.Schema;

const DriverSchema = Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: `${User}`
    },
    orders: {
        type: Array,
        required: true,
    }
});

const Driver = mongoose.model("Driver", DriverSchema);

export default {
    readAll: async function () {
        return await Driver.find();
    },

    readOne: async function (id) {
        return await Driver.findById(id);
    },

    create: async function (userID) {
        console.log("Driver");
        const user = await User.readOne(userID);         

        console.log(user);
        const orders = [];
        
        const driver = new Driver({
            userID,
            orders: orders,
        });
        return await driver.save();
    },

    updateByID: async function (id, orderObject) {
        return await Driver.findByIdAndUpdate(
            id,
            orderObject,
            { new: true, runValidators: true }
        );
    },

    deleteByID: async function (id) {
        return await Driver.deleteOne({ _id: id });
    },

    addOrderToDriver: async function (id, driverID) {
        const order = await Driver.findById(id);
        if (!order) throw new Error("order not found");

        order.driver = driverID;

        return await order.save();
    }
}
