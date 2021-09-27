import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	detail: {
		type: String,
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
	price: {
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

	create: async function (name, detail, customerId, date, price) {
		const order = new Order({
			name,
			detail,
			date,
			customerId,
			price,
			driver: false,
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

		return await order.save();
	}
}
