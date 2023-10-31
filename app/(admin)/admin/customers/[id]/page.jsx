import { FiMail, FiPhone, FiKey, FiHome, FiTrash } from "react-icons/fi";
import Link from "next/link";

function AdminCustomerDetailsPage() {
	return (
		<>
			<div className="mb-5">
				<h2 className="text-2xl font-bold">John Doe</h2>
			</div>
			<div className="card bg-base-100 mb-5">
				<div className="card-body">
					<h2 className="card-title">Details</h2>
					<ul className="space-y-2">
						<li className="flex items-center gap-2">
							<FiMail className="w-5 h-5" />
							<a href="mailto:slyboydon1@gmail.com">
								slyboydon1@gmail.com
							</a>
						</li>
						<li className="flex items-center gap-2">
							<FiPhone className="w-5 h-5" />
							<a href="tel:+2347063069903">+2347063069903</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-wrap gap-5 mb-5">
				<div className="flex-1 card bg-base-100">
					<div className="card-body">
						<h2 className="card-title">Type</h2>
						<p className="space-x-2">
							<span>Current:</span>
							<span className="font-bold">Rental</span>
						</p>

						<div className="flex gap-5">
							<button className="flex gap-2 items-center bg-primary bg-opacity-10 hover:bg-opacity-25 py-3 px-4 rounded-2xl">
								<FiKey />
								<span>Retal</span>
							</button>
							<button className="flex gap-2 items-center bg-primary bg-opacity-10 hover:bg-opacity-25 py-3 px-4 rounded-2xl">
								<FiHome />
								<span>Purchase</span>
							</button>
						</div>
						<div className="card-actions justify-end">
							<button className="btn btn-outline btn-primary">
								Update
							</button>
						</div>
					</div>
				</div>
				<div className="flex-1 card bg-base-100">
					<div className="card-body">
						<h2 className="card-title">Apartments</h2>
						<ul className="list-inside list-disc">
							<li className="list-item gap-2">
								<Link
									className="link link-hover"
									href={`/admin/apartments/${"id"}`}
								>
									lorem ipsum
								</Link>
								<button className="btn btn-outline btn-xs btn-error ml-2">
									<FiTrash />
								</button>
							</li>
						</ul>
						<div className="card-actions justify-end">
							<button className="btn btn-outline btn-primary">
								Add
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="card bg-base-100 mb-5">
				<div className="card-body">
					<h2 className="card-title">Activities</h2>
					<div className="overflow-x-auto">
						<table className="table table-zebra">
							{/* head */}
							<thead>
								<tr>
									<th></th>

									<th>Job</th>
									<th>Date/time</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{/* row 1 */}
								<tr>
									<th>1</th>

									<td>Quality Control Specialist</td>
									<td>12/12/2023 11:30pm</td>
									<td>
										<button className="btn btn-outline btn-xs btn-error ml-2">
											<FiTrash />
										</button>
									</td>
								</tr>
								{/* row 2 */}
								<tr>
									<th>2</th>

									<td>Desktop Support Technician</td>
									<td>12/12/2023 11:30pm</td>
									<td>
										<button className="btn btn-outline btn-xs btn-error ml-2">
											<FiTrash />
										</button>
									</td>
								</tr>
								{/* row 3 */}
								<tr>
									<th>3</th>

									<td>Tax Accountant</td>
									<td>12/12/2023 11:30pm</td>
									<td>
										<button className="btn btn-outline btn-xs btn-error ml-2">
											<FiTrash />
										</button>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

			<button className="btn btn-error btn-block">Destroy</button>
		</>
	);
}

export default AdminCustomerDetailsPage;
