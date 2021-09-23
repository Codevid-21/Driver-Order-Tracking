import mongoose from "mongoose";
import User from "./User.js";

const Schema = mongoose.Schema;

const DriverSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    deliveries: {
        // array icindeki itemlarin idsi düzeltilecek
        type: Array,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    isWorking: {
        type: Boolean,
        required: true,
    }
});

const Driver = mongoose.model("Driver", DriverSchema);

export default {
    readAll: async function () {
        return await Driver.find().populate("user");
    },

    readOne: async function (id) {
        return await Driver.findById(id).populate("user");
    },

    readByUserID: async function (id) {
        return await Driver.find({userId: id});
    },

    create: async function (userID) {

        const driver = new Driver({
            user: userID,
            deliveries: [],
            status: "free",
            isWorking: false,
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
