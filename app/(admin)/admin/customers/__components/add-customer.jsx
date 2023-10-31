"use client";

function AddCustomer() {
	return (
		<div>
			<button
				className="btn btn-primary"
				onClick={() =>
					document.getElementById("my_modal_2").showModal()
				}
			>
				Add customer
			</button>
			{/* Open the modal using document.getElementById('ID').showModal() method */}

			<dialog
				id="my_modal_2"
				className="modal"
			>
				<div className="modal-box">
					<h3 className="font-bold text-lg">Add new customer</h3>
					<form action="">
						<div className="form-control">
							<label
								htmlFor="name"
								className="label"
							>
								Name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label
								htmlFor="email"
								className="label"
							>
								E-mail
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control mb-3">
							<label
								htmlFor="phone"
								className="label"
							>
								Phonenumber
							</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								className="input input-bordered"
							/>
						</div>
						<button className="btn btn-primary">Add</button>
					</form>
				</div>
				<form
					method="dialog"
					className="modal-backdrop"
				>
					<button>Close</button>
				</form>
			</dialog>
		</div>
	);
}

export default AddCustomer;
