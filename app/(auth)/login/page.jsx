function AdminLoginPage() {
	return (
		<div className="hero min-h-screen">
			<div className="hero-content ">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<h2 className="text-2xl font-bold text-center mt-5">
						Admin Login
					</h2>
					<form className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">Login</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AdminLoginPage;
