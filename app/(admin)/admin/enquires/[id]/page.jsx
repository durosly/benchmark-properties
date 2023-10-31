import { FiUser, FiMail, FiPhone, FiHome } from "react-icons/fi";
import Link from "next/link";

function EnquiriesDetailsPage() {
	return (
		<>
			<div className="mb-5">
				<h2 className="text-2xl font-bold">
					Enquiry (Room/aparment title)
				</h2>
			</div>

			<div className="card bg-base-100 mb-5">
				<div className="card-body">
					<h2 className="card-title">Info</h2>

					<ul>
						<li className="flex gap-2">
							<FiUser className="w-5 h-5" />
							<span>John Doe</span>
						</li>
						<li className="flex gap-2">
							<FiMail className="w-5 h-5" />
							<a href="mailto:john@doe.com">john@doe.com</a>
						</li>
						<li className="flex gap-2">
							<FiPhone className="w-5 h-5" />
							<a href="tel:+2347063069903">+2347063069903</a>
						</li>
						<li className="flex gap-2">
							<FiHome className="w-5 h-5" />
							<Link
								className="link"
								href={`/admin/rooms/${"id"}`}
							>
								Apartment title
							</Link>
						</li>
					</ul>

					<div className="divider">Message</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
			</div>

			<button className="btn btn-error btn-block">Destory</button>
		</>
	);
}

export default EnquiriesDetailsPage;
