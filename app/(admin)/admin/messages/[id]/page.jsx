import { FiUser, FiMail, FiPhone, FiHome, FiCalendar } from "react-icons/fi";
import Link from "next/link";

function MessagesDetailsPage() {
	return (
		<>
			<div className="mb-5">
				<h2 className="text-2xl font-bold">title</h2>
			</div>

			<div className="card bg-base-100 mb-5">
				<div className="card-body">
					<h2 className="card-title">Info</h2>

					<ul>
						<li className="flex justify-end gap-2">
							<FiCalendar className="w-4 h-4 stroke-slate-500" />
							<span className="text-slate-500 text-sm italic">
								12/12/2023 3:00pm
							</span>
						</li>
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

export default MessagesDetailsPage;
