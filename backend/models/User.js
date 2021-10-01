import mongoose from "mongoose";
import Order from "./Order.js";

const Schema = mongoose.Schema;

const UserSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    // orders: {
    //     type: Array,
    //     // ref: "Order",
    // }
  },
  { versionKey: false }
);

const User = mongoose.model("User", UserSchema);

export default {
  User,
  readAll: async function () {
    return await User.find();
  },

  readOne: async function (id) {
    return await User.findById(id);
  },

  create: async function (name, email, orders) {
    console.log("User");
    const user = new User({
      name,
      email,
      orders,
    });
    return await user.save();
  },
  findByEmail: async function (email) {
    return await User.find({ email: email });
  },

  updateByID: async function (id, userObject) {
    console.log("user Object ", userObject);
    // return await User.findById(id);
    return await User.findByIdAndUpdate(id, userObject, {
      new: true,
      runValidators: true,
    });
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
};
