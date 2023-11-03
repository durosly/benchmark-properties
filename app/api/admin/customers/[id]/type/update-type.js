import connectMongo from "@/lib/connectDB";
import CustomerModel from "@/models/customer";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

async function updateCustomerType(request, { params: { id } }) {
	try {
		await connectMongo();

		if (!mongoose.Types.ObjectId.isValid(id)) {
			return NextResponse.json(
				{ status: false, message: "Invalid UUID" },
				{ status: 400 }
			);
		}

		const { type } = await request.json();

		const customer = await CustomerModel.findByIdAndUpdate(id, { type });

		if (!customer) {
			return NextResponse.json(
				{ status: false, message: "No customer account found" },
				{ status: 404 }
			);
		}

		return NextResponse.json({
			status: true,
			message: "success",
			customer,
		});
	} catch (error) {
		return NextResponse.json(
			{ status: false, message: error.message },
			{ status: 500 }
		);
	}
}

export default updateCustomerType;