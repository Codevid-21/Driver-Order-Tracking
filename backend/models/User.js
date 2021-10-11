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
    password: {
      type: String
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
    isAdmin: {
      type: Boolean,
    },
    // tip: {
    //   type: String,
    // },
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
  login: async function ({ email, password }) {
    const user = await User.find({ email: email });
    if (!user) throw new Error("user_not_found");
    
    if (!user[0].isAdmin) throw new Error("user_not_admin");
    
    console.log("user bulundu", user)
    // const isPasswordCorrect = await bcrypt.compare(password.toString() + process.env.PEPPER, user.password);
    const isPasswordCorrect = (password === user[0].password);
    if (!isPasswordCorrect) throw new Error("password_incorrect");

    // return { userId: user[0]._id, name: user[0].name, tip: user[0].tip };
    return { userId: user[0]._id, name: user[0].name, password: user[0].password };
  },
  findByEmail: async function (email) {
    return await User.find({ email: email });
  },
  create: async function ({name, surname, email, password, tel, address, city, isAdmin}) {
    console.log("User");
    const user = new User({
      name,
      surname,
      email,
      password,
      tel,
      address,
      city,
      isAdmin
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
