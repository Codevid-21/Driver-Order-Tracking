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
    }
}, { versionKey: false });

const Order = mongoose.model("Order", OrderSchema);

async function readAll () {
	return await Order.find();
}

async function create (name, detail, customerId, date, price, driver) {
	const order = new Order({
		name,
		detail,
        date,
        customerId,
        price,
        driver,
	});

	return await order.save();
}

export default {
	readAll,
	create,
};