import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required!"],
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Email is required!"],
		unique: true,
		trim: true,
	},
	address: {
		type: String,
		required: [true, "Address is required!"],
		trim: true,
	},
	phone: {
		type: String,
		required: [true, "Phone is required!"],
		trim: true,
	},
});

export default mongoose.models.Employee ||
	mongoose.model("Employee", EmployeeSchema);
