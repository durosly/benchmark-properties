import { FiHome, FiChevronDown, FiUsers } from "react-icons/fi";

function DashboardPage() {
	return (
		<>
			<div className="mb-5">
				<h2 className="text-2xl font-bold">Dashboard</h2>
			</div>

			<div className="flex flex-wrap gap-10">
				<div className="card bg-base-100">
					<div className="card-body ">
						<FiHome className="w-7 h-7 stroke-green-600" />
						<p>Total properties</p>
						<p className="text-4xl font-bold">200</p>
						<div className="flex flex-wrap">
							<div className="dropdown">
								<label
									tabIndex={0}
									className="btn btn-sm btn-ghost m-1"
								>
									<span>Rentals</span>
									<span className="badge badge-success">
										50%
									</span>
									<FiChevronDown className="w-5 h-5" />
								</label>
								<div
									tabIndex={0}
									className="dropdown-content space-y-2 text-xs z-[1] p-4 shadow bg-base-100 rounded-box w-52"
								>
									<div className="flex gap-2">
										<span>Available:</span>
										<span className="badge">20 (40%)</span>
									</div>
									<div className="flex gap-2">
										<span>Taken:</span>
										<span className="badge">20 (50%)</span>
									</div>
								</div>
							</div>
							<div className="dropdown">
								<label
									tabIndex={0}
									className="btn btn-sm btn-ghost m-1"
								>
									<span>Sales</span>
									<span className="badge badge-success">
										50%
									</span>
									<FiChevronDown className="w-5 h-5" />
								</label>
								<div
									tabIndex={0}
									className="dropdown-content space-y-2 text-xs z-[1] p-4 shadow bg-base-100 rounded-box w-52"
								>
									<div className="flex gap-2">
										<span>Available:</span>
										<span className="badge">20 (40%)</span>
									</div>
									<div className="flex gap-2">
										<span>Sold:</span>
										<span className="badge">20 (50%)</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="card bg-base-100">
					<div className="card-body ">
						<FiUsers className="w-7 h-7 stroke-blue-600" />
						<p>Customers</p>
						<p className="text-4xl font-bold">200</p>
						<div className="flex flex-wrap">
							<div className="dropdown">
								<label
									tabIndex={0}
									className="btn btn-sm btn-ghost m-1"
								>
									<span>Paying</span>
									<span className="badge badge-info">
										50%
									</span>
									<FiChevronDown className="w-5 h-5" />
								</label>
								<div
									tabIndex={0}
									className="dropdown-content space-y-2 text-xs z-[1] p-4 shadow bg-base-100 rounded-box w-52"
								>
									<div className="flex gap-2">
										<span>Rentals:</span>
										<span className="badge">20 (40%)</span>
									</div>
									<div className="flex gap-2">
										<span>Sales:</span>
										<span className="badge">20 (50%)</span>
									</div>
								</div>
							</div>

							<span
								tabIndex={0}
								className="btn btn-sm btn-ghost m-1"
							>
								<span>New</span>
								<span className="badge badge-info">50%</span>
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default DashboardPage;
