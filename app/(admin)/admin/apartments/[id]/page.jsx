import Image from "next/image";
import { FiCheckCircle, FiSearch, FiTrash2, FiX } from "react-icons/fi";
import ApartmentInfo from "./__components/apartment-info";
import ApartmentStatus from "./__components/apartment-status";
import ApartmentDescription from "./__components/apartment-desc";
import ApartmentFeatures from "./__components/apartment-features";
import ApartmentImages from "./__components/apartment-images";

function ApartmentDetailsPage({ params: { id } }) {
	let status = "hidden";
	return (
		<>
			<div className="mb-5">
				<h2 className="text-2xl font-bold">
					Apartments/Properties title
				</h2>
			</div>

			<div className="flex flex-wrap gap-5 mb-5">
				<ApartmentInfo id={id} />
				<ApartmentStatus id={id} />
			</div>

			<ApartmentDescription id={id} />

			<ApartmentFeatures id={id} />

			<ApartmentImages id={id} />

			<div className="card bg-base-100 mb-5">
				<div className="card-body">
					<h2 className="card-title">Video</h2>
					<div className="relative">
						<video
							className="w-full sm:max-w-sm"
							controls
							src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
						></video>
					</div>
					<div className="card-actions">
						<button className="btn btn-primary">Upload</button>
					</div>
				</div>
			</div>

			<div className="card bg-base-100 mb-5">
				<div className="card-body">
					<h2 className="card-title">Owners/Occupants</h2>
					<form
						action="/nice"
						className="relative"
					>
						<div className="form-control relative">
							<input
								type="text"
								className="input input-bordered pl-12"
							/>
							<FiSearch className="w-5 h-5 absolute top-1/2 -translate-y-1/2 left-4 pointer-events-none" />
						</div>

						{/* dropdown suggestion */}
						{/* <ul className="absolute shadow-md rounded-md bottom-0 left-0 translate-y-full bg-base-100 p-3 w-full space-y-2">
							<li className="hover:bg-base-200">Nice</li>
							<li className="hover:bg-base-200">Nice</li>
							<li className="hover:bg-base-200">Nice</li>
						</ul> */}
					</form>
					<ul>
						<li className="flex gap-2 items-center">
							<FiCheckCircle className="stroke-success" />
							<span>Bathroom is nice</span>

							<button className="btn btn-sm btn-square btn-error">
								<FiTrash2 />
							</button>
						</li>
					</ul>
					<div className="card-actions">
						<button className="btn btn-primary">Save</button>
					</div>
				</div>
			</div>

			<button className="btn btn-error btn-block">Destroy</button>
		</>
	);
}

export default ApartmentDetailsPage;
