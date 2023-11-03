"use client";
import Link from "next/link";
import { FiTrash2 } from "react-icons/fi";

function CustomerApartments() {
	return (
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
							<FiTrash2 />
						</button>
					</li>
				</ul>
				<div className="card-actions justify-end">
					<button className="btn btn-outline btn-primary">Add</button>
				</div>
			</div>
		</div>
	);
}

export default CustomerApartments;
