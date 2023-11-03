import Link from "next/link";
import { FiTrash } from "react-icons/fi";
import CustomerType from "./__components/customer-type";
import UserInfo from "./__components/user-info";

function AdminCustomerDetailsPage({ params: { id } }) {
	return (
		<>
			<UserInfo id={id} />

			<div className="flex flex-wrap gap-5 mb-5">
				<CustomerType id={id} />
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
