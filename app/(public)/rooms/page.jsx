import { BiBath } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { FiMapPin, FiSearch } from "react-icons/fi";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineOtherHouses } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Link from "next/link";
import ImageSliderContainer from "./__components/images";

function RoomsPage() {
	return (
		<>
			<h2 className="text-4xl font-bold my-5">Rooms</h2>

			<form
				action=""
				className="bg-white rounded-2xl p-5 flex flex-wrap items-end gap-5 mb-10"
			>
				<div className="form-control flex-1">
					<label
						className="label justify-start gap-2"
						htmlFor="location"
					>
						<FiMapPin className="w-5 h-5" />
						<span>Location</span>
					</label>
					<select
						name="location"
						id="location"
						className="select select-bordered"
					>
						<option value="">-- select location --</option>
						<option value="warri">Warri</option>
						<option value="abuja">Abuja</option>
						<option value="port">Port Harcourt</option>
					</select>
				</div>
				<div className="form-control flex-1">
					<label
						className="label justify-start gap-2"
						htmlFor="property"
					>
						<BsHouse className="w-5 h-5" />
						<span>Property Type</span>
					</label>
					<select
						name="property"
						id="property"
						className="select select-bordered"
					>
						<option value="">-- select property --</option>
						<option value="warri">Warri</option>
						<option value="abuja">Abuja</option>
						<option value="port">Port Harcourt</option>
					</select>
				</div>
				<div className="form-control flex-1">
					<label
						className="label justify-start gap-2"
						htmlFor="price"
					>
						<span className="text-xl ">&#8358;</span>
						<span>Price Range</span>
					</label>
					<select
						name="price"
						id="price"
						className="select select-bordered"
					>
						<option value="">-- select price --</option>
						<option value="warri">Warri</option>
						<option value="abuja">Abuja</option>
						<option value="port">Port Harcourt</option>
					</select>
				</div>
				<div>
					<button className="btn btn-primary">
						<FiSearch />
						Search
					</button>
				</div>
			</form>

			<div className="mb-10 text-right">
				<p className="font-bold">1 - 10 of 100</p>
			</div>

			<div className="flex gap-5 flex-wrap mb-20">
				{Array(5)
					.fill(2)
					.map((_, i) => (
						<Link
							href={`/rooms/${i}`}
							key={i}
							className="block w-full sm:w-[calc((100%_-_1.25rem_)_/_2)] md:w-[calc((100%_-_1.25rem_*_2)_/_3)] rounded-2xl overflow-hidden border hover:border-primary"
						>
							<div className="relative h-80 bg-red-500">
								<ImageSliderContainer />
							</div>
							<div className="p-5 space-y-2 bg-white">
								<h3 className="text-xl font-bold">
									7012, Abuja, Central City
								</h3>
								<p className="font-bold text-primary">
									&#8358; 2,000,000.00
								</p>
								<p className="flex items-center gap-2 text-slate-400 text-sm">
									<FiMapPin className="w-5 h-5" />
									<span>
										12, Alaba estate, Effurun, Delta State
									</span>
								</p>
								<div className="flex gap-2">
									<div className="flex-1 flex gap-2">
										<BiBath className="w-5 h-5 fill-primary" />
										<span>2 Baths</span>
									</div>
									<div className="flex-1 flex gap-2">
										<LuBedSingle className="w-5 h-5 stroke-primary" />
										<span>2 Beds</span>
									</div>
									<div className="flex-1 flex gap-2">
										<MdOutlineOtherHouses className="w-5 h-5 fill-primary" />
										<span>234 sqft</span>
									</div>
								</div>
							</div>
						</Link>
					))}
			</div>
			<div className="text-center mb-20">
				<div className="inline-flex gap-5 justify-center items-center">
					<button className="btn">
						<FiChevronLeft />
					</button>
					<p className=" ">Page 22</p>
					<button className="btn">
						<FiChevronRight />
					</button>
				</div>
			</div>
		</>
	);
}

export default RoomsPage;
