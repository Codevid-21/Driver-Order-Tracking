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
    tel: {
      type: String, // Girilen bilginin telefon numarasi olup olmadigi kontrol edilecek.
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
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
  findByEmail: async function (email) {
    return await User.find({ email: email });
  },
  create: async function (name, surname, email, tel, address, city) {
    console.log("User");
    const user = new User({
      name,
      surname,
      email,
      tel,
      address,
      city,
    });
    return await user.save();
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
