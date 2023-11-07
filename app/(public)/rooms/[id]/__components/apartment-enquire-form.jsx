"use client";

function ApartmentEnquireForm({ id }) {
	return (
		<form action="">
			<div className="form-control">
				<label
					htmlFor="name"
					className="label justify-start"
				>
					Name<span className="text-error">*</span>
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
					className="label justify-start"
				>
					E-mail<span className="text-error">*</span>
				</label>
				<input
					type="email"
					name="email"
					id="email"
					className="input input-bordered"
				/>
			</div>
			<div className="form-control">
				<label
					htmlFor="phone"
					className="label justify-start"
				>
					Phonenumber<span className="text-error">*</span>
				</label>
				<input
					type="tel"
					name="phone"
					id="phone"
					className="input input-bordered"
				/>
			</div>
			<div className="form-control mb-5">
				<label
					htmlFor="message"
					className="label justify-start"
				>
					Message<span className="text-error">*</span>
				</label>

				<textarea
					className="textarea textarea-bordered"
					name="message"
					id="message"
					rows="4"
				></textarea>
			</div>
			<button className="btn btn-primary btn-block">Send</button>
		</form>
	);
}

export default ApartmentEnquireForm;
