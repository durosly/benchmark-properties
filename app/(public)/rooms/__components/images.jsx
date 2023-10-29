"use client";
import Image from "next/image";

function ImageSliderContainer() {
	return (
		<>
			<div className="relative w-full h-80">
				<Image
					src="https://images.pexels.com/photos/2111768/pexels-photo-2111768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill
					className="object-cover"
					alt="title"
				/>
			</div>
		</>
	);
}

export default ImageSliderContainer;
