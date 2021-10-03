import mongoose from "mongoose";
import Driver from "./Driver.js";

const OrderSchema = mongoose.Schema({
	foods: {
		type: Array,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	customerId: {
		type: String,
		required: true,
	},
	total: {
		type: String,
		required: true,
	},
	driver: {
		type: String,
		required: true,
	},
	isDelivered: {
		type: Boolean,
		required: true,
	}
}, { versionKey: false });

const Order = mongoose.model("Order", OrderSchema);

export default {
	Order,
	readAll: async function () {
		return await Order.find();
	},

	readOne: async function (id) {
		return await Order.findById(id);
	},

	create: async function (food, customerId, total) {
		const order = new Order({
			food,
			date: Date.now(),
			customerId,
			total,
			driver: "not yet",
			isDelivered: false,
		});
		return await order.save();
	},

	updateByID: async function (id, orderObject) {
		return await Order.findByIdAndUpdate(
			id,
			orderObject,
			{ new: true, runValidators: true }
		);
	},

	deleteByID: async function (id) {
		return await Order.deleteOne({ _id: id });
	},

	addDriverToOrder: async function (id, driverID) {
		const order = await Order.findById(id);
		if (!order) throw new Error("order not found");

		order.driver = driverID;
		
		const driver = await Driver.readOne(driverID);
		if (!driver) throw new Error("driver not found");
		
		driver.deliveries.push(id);

		return await order.save() && await driver.save();
	}
}
