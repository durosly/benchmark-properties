import { FiPackage } from "react-icons/fi";

function Empty({ message }) {
	return (
		<div>
			<FiPackage className="w-20 h-20 mx-auto" />
			<p className=" font-bold text-center">{message}</p>
		</div>
	);
}

export default Empty;
