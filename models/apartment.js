import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";
import { z } from "zod";

const apartmentSchema = new mongoose.Schema({
	title: String,
	baths: Number,
	beds: Number,
	space: Number,
	price: Number,
	location: String,
	features: [String],
	description: String,
	images: [String],
	video: String,
	status: {
		type: String,
		enum: ["available", "unavailable", "hidden"],
		default: "hidden",
	},
	type: {
		type: String,
		enum: ["sale", "rental"],
		default: "rental",
	},
	createdAt: { type: Date, default: Date.now },
});

apartmentSchema.plugin(paginate);
apartmentSchema.index({
	title: "text",
	location: "text",
	beds: "text",
	description: "text",
});
// customerSchema.index({ name: "text" });
// customerSchema.index({ email: "text" });
// customerSchema.index({ phone: "text" });

const ApartmentUpdateInfoValidationSchema = z.object({
	price: z.coerce.number({ message: "Enter number" }).gt(0),
	location: z.string().min(3),
	space: z.coerce.number().gt(0),
	baths: z.coerce.number().gt(0),
	beds: z.coerce.number().gt(0),
});

const ApartmentUpdateTitleValidationSchema = z.object({
	title: z.string().min(3),
});
const ApartmentUpdateStatusValidationSchema = z.object({
	status: z.enum(["available", "unavailable", "hidden"], {
		message: "Invalid status option",
	}),
});
const ApartmentUpdateTypeValidationSchema = z.object({
	type: z.enum(["rental", "sale"]),
});

const ApartmentValidationSchema = ApartmentUpdateInfoValidationSchema.merge(
	ApartmentUpdateTitleValidationSchema
).merge(ApartmentUpdateTypeValidationSchema);

export {
	ApartmentValidationSchema,
	ApartmentUpdateInfoValidationSchema,
	ApartmentUpdateTypeValidationSchema,
	ApartmentUpdateStatusValidationSchema,
};

const ApartmentModel =
	mongoose.models.Apartment || mongoose.model("Apartment", apartmentSchema);

export default ApartmentModel;
