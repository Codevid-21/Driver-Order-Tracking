import mongoose from "mongoose";
import Driver from "./Driver.js";
import Customer from "./Customer.js";

const Schema = mongoose.Schema;

const OrderSchema = Schema({
	foods: {
		type: Array,
		required: true,
	},
	date: {
		type: String,
		required: true,
	},
	customerId: {
		type: Schema.Types.ObjectId,
    	ref: "Customer",
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
		return await Order.find().populate({path: "customerId", populate: { path: "user"}});
	},

	readOne: async function (id) {
		return await Order.findById(id);
	},

	create: async function (food, customerId, total) {
		let now = new Date();
		
		const ho = new Intl.DateTimeFormat('en', { hour: 'numeric', hour12: false }).format(now)
		const mi = new Intl.DateTimeFormat('en', { minute: 'numeric' }).format(now)
		
		const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(now)
		const mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(now)
		const da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(now)

		const order = new Order({
			food,
			date: `${ho}:${mi} - ${da} ${mo} ${ye}`,
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
