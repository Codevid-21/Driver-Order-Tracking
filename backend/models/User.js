import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    }
}, { versionKey: false });

const User = mongoose.model("User", UserSchema);

export default {
    User, 
    readAll: async function () {
        return await User.find();
    },

    readOne: async function (id) {
        return await User.findById(id);
    },

    create: async function (name, email) {
        console.log("User");
        const user = new User({
            name,
            email,
        });
        return await user.save();
    },

    updateByID: async function (id, orderObject) {
        return await User.findByIdAndUpdate(
            id,
            orderObject,
            { new: true, runValidators: true }
        );
    },

    deleteByID: async function (id) {
        return await User.deleteOne({ _id: id });
    },

    // addDriverToUser: async function (id, driverID) {
    //     const order = await User.findById(id);
    //     if (!order) throw new Error("order not found");

    //     order.driver = driverID;

    //     return await order.save();
    // }
}
