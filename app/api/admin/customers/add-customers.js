import { NextResponse } from "next/server";

async function addCustomers(request) {
	try {
		const body = await request.json();

		console.log(body);
		return NextResponse.json({ status: true, message: "Success" });
	} catch (error) {
		return NextResponse.json(
			{ status: false, message: error.message },
			{ status: 400 }
		);
	}
}

export default addCustomers;
