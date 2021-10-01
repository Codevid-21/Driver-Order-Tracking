import Customer from "../models/Customer.js";
import User from "../models/User.js";

export default {
  readAll: async function (req, res, next) {
    try {
      const result = await Customer.readAll();
      res.json({ result });
    } catch (error) {
      next(error);
    }
  },
  create: async function (req, res, next) {
    try {
      const user = await User.findByEmail(req.body.customerEmail);
      if (user.length > 0) {
        const userID = user[0]._id;
        const result = await Customer.create(userID);
        return res.json({result});
      } else {
        
        res.json("user yok");
      }
    } catch (error) {
      next(error);
    }
  },
  findByEmail: async function (req, res, next) {
    try {
      const result = await Customer.findByEmail(req.params.customerEmail);

      next(result);
    } catch (error) {
      next(error);
    }
  },
};
