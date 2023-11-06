"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Skeleton from "react-loading-skeleton";

function ApartmentTitle({ id }) {
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["apartments", { apartmentId: id }],
		queryFn: () => axios(`/api/admin/apartments/${id}`),
	});

	const queryResponse = data?.data?.apartment || {};
	const { title } = queryResponse;

	if (isError) {
		return (
			<>
				<div className="mb-5">
					<h2 className="text-2xl font-bold">Error</h2>
				</div>
				<div className="card bg-base-100 mb-5">
					<div className="card-body">
						<p>An Error occured: {error.message}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<div className="mb-5">
			<h2 className="text-2xl font-bold">
				{isPending ? <Skeleton /> : title}
			</h2>
		</div>
	);
}

export default ApartmentTitle;
