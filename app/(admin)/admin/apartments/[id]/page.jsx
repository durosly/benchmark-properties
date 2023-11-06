import Image from "next/image";
import { FiCheckCircle, FiSearch, FiTrash2, FiX } from "react-icons/fi";
import ApartmentInfo from "./__components/apartment-info";
import ApartmentStatus from "./__components/apartment-status";
import ApartmentDescription from "./__components/apartment-desc";
import ApartmentFeatures from "./__components/apartment-features";
import ApartmentImages from "./__components/apartment-images";
import ApartmentVideo from "./__components/apartment-video";
import ApartmentOccupant from "./__components/apartment-occupant";
import ApartmentDestroyBtn from "./__components/apartment-destroy";

function ApartmentDetailsPage({ params: { id } }) {
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

			<ApartmentVideo id={id} />

			<ApartmentOccupant id={id} />

			<ApartmentDestroyBtn id={id} />
		</>
	);
}

export default ApartmentDetailsPage;
