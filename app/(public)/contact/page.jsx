import Image from "next/image";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import meetYouImg from "@/public/images/meet-you.jpg";

function ContactUsPage() {
	return (
		<>
			<h2 className="text-4xl font-bold my-5">Contact Us</h2>

			<div className="relative h-32 rounded-2xl overflow-hidden mb-20">
				<Image
					src={meetYouImg}
					fill
					className="object-cover"
					alt="Can't wait to here from you"
				/>
				<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/25">
					<p className="text-2xl md:text-4xl text-white px-3 py-1 rounded-xl">
						We can&apos;t wait to hear from you.
					</p>
				</div>
			</div>

			<div className="md:flex mb-10">
				<div className="flex-1">
					<h2 className="text-2xl font-bold mb-5">Get in touch</h2>
					<ul className="space-y-2">
						<li className="flex gap-2 items-center">
							<FiMapPin className="stroke-primary" />
							<p>House 2 Nice Boundaries Estate, Lekki, Lagos.</p>
						</li>
						<li className="flex gap-2 items-center">
							<FiMail className="stroke-primary" />
							<a href="mailto:info@benchmark.com">
								info@benchmark.com
							</a>
						</li>
						<li className="flex gap-2 items-center">
							<FiPhone className="stroke-primary" />
							<a href="tel:+2347063069903">+234 7063 0699 03</a>
						</li>
					</ul>
				</div>
				<div className="flex-1 mt-10 md:mt-0">
					<div>
						<h2 className="text-2xl font-bold">
							Leave us a message
						</h2>
					</div>
					<form action="">
						<div className="form-control">
							<label
								htmlFor="name"
								className="label justify-start"
							>
								Name<span className="text-error">*</span>
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label
								htmlFor="email"
								className="label justify-start"
							>
								Email<span className="text-error">*</span>
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label
								htmlFor="subject"
								className="label justify-start"
							>
								Subject
							</label>
							<input
								type="text"
								name="subject"
								id="subject"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label
								htmlFor="message"
								className="label justify-start"
							>
								Message<span className="text-error">*</span>
							</label>

							<textarea
								name="message"
								id="message"
								className="textarea textarea-bordered"
								rows={5}
							></textarea>
						</div>
						<button className="btn btn-primary btn-block mt-10">
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default ContactUsPage;
