import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";
import { z } from "zod";

const customerSchema = new mongoose.Schema({
	name: String,
	email: String,
	phone: String,
	createdAt: { type: Date, default: Date.now },
});

customerSchema.plugin(paginate);
customerSchema.index({ name: "text", email: "text", phone: "text" });
// customerSchema.index({ name: "text" });
// customerSchema.index({ email: "text" });
// customerSchema.index({ phone: "text" });

const CustomerValidationSchema = z.object({
	name: z.string().min(3),
	email: z.string().email(),
	phone: z.string().min(2),
});

export { CustomerValidationSchema };

const CustomerModel =
	mongoose.models.Customer || mongoose.model("Customer", customerSchema);

export default CustomerModel;
