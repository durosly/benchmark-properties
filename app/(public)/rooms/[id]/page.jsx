import logoText from "@/logos/logo-text.png";
import Image from "next/image";
import { BiBath } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FiArrowLeft, FiCheckCircle, FiChevronDown } from "react-icons/fi";
import { LuBedSingle } from "react-icons/lu";
import { MdOutlineOtherHouses } from "react-icons/md";
import ReturnBtn from "../../components/return-btn";
import ShareBtn from "./__components/share-btn";

function RoomDetailsPage() {
	return (
		<>
			<ReturnBtn className="btn btn-sm btn-ghost">
				<FiArrowLeft />
				<span>Back to search</span>
			</ReturnBtn>
			<h2 className="text-4xl font-bold my-5">Rooms Title</h2>
			<div className="flex justify-between gap-5 flex-wrap items-center mb-10">
				<div className="flex gap-4 text-slate-400">
					<div className="flex-1 flex gap-1">
						<BiBath className="w-5 h-5 " />
						<span className="whitespace-nowrap">2 Baths</span>
					</div>
					<div className="flex-1 flex gap-1">
						<LuBedSingle className="w-5 h-5 " />
						<span className="whitespace-nowrap">2 Beds</span>
					</div>
					<div className="flex-1 flex gap-1">
						<MdOutlineOtherHouses className="w-5 h-5 " />
						<span className="whitespace-nowrap">234 sqft</span>
					</div>
				</div>
				<div>
					<ShareBtn />
				</div>
			</div>

			<div className="md:flex gap-10 mb-20">
				<div className="flex-1">
					<div className="relative h-96 rounded-2xl overflow-hidden mb-5">
						<Image
							src={
								"https://images.pexels.com/photos/7045712/pexels-photo-7045712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							}
							fill
							alt="room title"
							className="object-cover"
						/>
					</div>

					<div className="flex gap-5 max-[400px]:w-[calc(100%_-_40px)] max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-x-auto">
						{Array(7)
							.fill(4)
							.map((_, i) => (
								<div
									key={i}
									className=" h-20 w-20 flex-shrink-0 relative rounded-box overflow-hidden"
								>
									<Image
										src={
											"https://images.pexels.com/photos/7045712/pexels-photo-7045712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
										}
										fill
										alt="room title"
										className="object-cover"
									/>
								</div>
							))}
					</div>
				</div>
				<div className="flex-1 self-start bg-white p-10 rounded-3xl">
					<h2 className="text-2xl font-bold text-slate-800">
						Property description
					</h2>
					{/* max-h-80 overflow-y-auto */}
					<div className="line-clamp-5 mb-5">
						<p className="">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Excepturi, tenetur. Facilis possimus odit ab
							deserunt labore voluptate at quibusdam doloremque,
							fugiat ad voluptatibus officiis dolor perferendis!
							In, modi, voluptatibus reprehenderit veritatis
							obcaecati libero excepturi eius non qui sint
							consequuntur sed delectus! Atque iste eum ipsam
							ipsum? Laudantium, sint cumque sit iusto quidem
							sequi at consectetur beatae magnam voluptatum neque
							quibusdam quae numquam porro eaque vero optio?
							Exercitationem excepturi maiores eveniet nihil
							voluptas dolorum soluta incidunt eligendi, nesciunt,
							obcaecati expedita quod aspernatur. Deserunt nisi
							beatae, fugiat rem saepe quam ad, fugit tempora
							quidem provident facilis similique at itaque quis!
							Dicta amet distinctio veritatis pariatur quis!
							Inventore harum tempore assumenda aperiam distinctio
							iste, maiores nemo maxime exercitationem tenetur
							quam minima tempora sit nam, debitis doloribus nihil
							et beatae! Ea dolore laborum rerum cumque eveniet,
							quae reprehenderit repellendus voluptates ullam eos
							accusantium, omnis ex culpa nesciunt laudantium
							quidem perspiciatis. Obcaecati necessitatibus omnis
							molestiae ea minus dolores, corrupti sed facere
							nesciunt officiis voluptatem quod est nulla, animi
							nobis perspiciatis quidem saepe quis. Quia eius
							incidunt esse numquam. Quo beatae necessitatibus,
							quibusdam, expedita molestiae unde, repudiandae vero
							hic dicta facilis veniam voluptates doloremque
							repellat! Accusamus non reiciendis pariatur cumque
							earum odit, exercitationem vero nostrum error
							praesentium quos quae culpa recusandae dignissimos
							fugit tempora. Ea, laudantium veniam? Fuga cumque ad
							eveniet. Illo, sint! Obcaecati, est quos eos rerum
							quaerat, numquam magni vitae dolores quibusdam sequi
							eveniet cum tempora quod quae, ab itaque soluta
							consequatur aliquam iure! Aliquam autem illum eos
							atque quia quibusdam id. Tenetur fuga consequatur
							tempore iusto, voluptatibus, laborum autem, aliquam
							omnis natus quae nobis! Eligendi inventore, quo
							voluptatem maiores iure nulla, reprehenderit sequi
							itaque, pariatur repellendus tempora. Commodi earum
							ipsam et aliquam nisi enim ad fugit quia iure eum
							hic quas quaerat cupiditate, deleniti, eveniet in
							iusto expedita maxime temporibus officiis quos
							similique. Nam, non quisquam odit ex enim modi.
							Consectetur facilis officiis quae culpa animi
							quaerat. Aliquam hic ipsa distinctio totam, est nisi
							quis tempora vitae reprehenderit ducimus dolore
							voluptatum amet iste blanditiis, dolor nesciunt
							nulla sed magnam iusto minima placeat! Nisi veniam
							nihil, nostrum ullam, laborum ex facilis minus
							voluptate, quas eius voluptas! Voluptatibus
							temporibus dicta consectetur repudiandae reiciendis
							ex enim, ab quibusdam, ducimus veniam laboriosam!
							Assumenda, in. Quibusdam odit alias labore
							provident, facilis obcaecati nam fuga voluptates
							suscipit pariatur eos veniam consequuntur error
							reprehenderit minima itaque inventore unde porro
							voluptatum dolores? Vel ipsa labore dolore nam unde!
							Inventore, totam vitae. Pariatur optio blanditiis
							maiores a neque, tempora officia voluptatem, nihil
							recusandae nemo explicabo ad quibusdam, consectetur
							ipsam itaque dolores veritatis! Molestiae facilis
							consequuntur dolorem nam nesciunt nostrum cumque,
							labore, perspiciatis soluta, eveniet corrupti sint
							aliquid incidunt at. Ex et sunt veniam dignissimos
							architecto quas sequi! Porro totam perspiciatis id
							odio culpa asperiores reiciendis assumenda sit
							adipisci, nostrum iste impedit dolor ipsum quibusdam
							et, illum magni in esse quaerat fuga! Quas minus
							possimus tempora qui aliquid, dicta, ea corrupti
							rerum repudiandae officiis delectus necessitatibus,
							minima doloribus? Eveniet aperiam possimus molestiae
							eaque debitis maxime quaerat eos eligendi aliquam,
							rem assumenda provident inventore?
						</p>
						<div className="bg-white pointer-events-none sticky bottom-0 flex h-20 [mask-image:linear-gradient(transparent,#000000)]"></div>
					</div>
					<button className="btn btn-primary btn-sm">
						Read more <FiChevronDown />
					</button>
				</div>
			</div>
			<div className="md:flex space-y-20 md:space-y-0 gap-20 mb-20">
				<div className="flex-1 bg-white p-5 sm:p-10 rounded-2xl">
					<h2 className="text-2xl font-bold text-slate-600 mb-5">
						Property features
					</h2>
					<ul className="flex flex-wrap gap-5 mb-5">
						{Array(5)
							.fill(3)
							.map((_, i) => (
								<li
									key={i}
									className="flex gap-2 items-center w-[calc((100%_-_1.25rem)_/_2)]"
								>
									<FiCheckCircle className="w-5 h-5 stroke-success" />
									<span>Balcony</span>
								</li>
							))}
					</ul>
					<button className="btn btn-primary btn-outline btn-sm">
						See more features
					</button>

					<div className="divider"></div>
					<div>
						<h4 className="text-2xl font-bold text-slate-600 mb-5">
							Video review
						</h4>
						<div className="relative">
							<video
								className="w-full "
								controls
								src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
							></video>
						</div>
					</div>
				</div>
				<div className="flex-1 bg-white p-5 sm:p-10 rounded-2xl">
					<div className="relative h-8 mb-10">
						<Image
							src={logoText}
							fill
							className="object-contain"
							alt="benchmark"
						/>
					</div>
					<div className="text-center space-y-2 mb-10">
						<p>
							Send a message by{" "}
							<span className="font-bold">WhatsApp</span>
						</p>
						<a
							href="https://wa.me/+2347063069903"
							className="btn btn-outline btn-primary"
						>
							<BsWhatsapp className="fill-success" />{" "}
							+2347063069903
						</a>
					</div>
					<div className="divider">Or submit and enquiry</div>
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
								E-mail<span className="text-error">*</span>
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
								htmlFor="phone"
								className="label justify-start"
							>
								Phonenumber<span className="text-error">*</span>
							</label>
							<input
								type="tel"
								name="phone"
								id="phone"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control mb-5">
							<label
								htmlFor="message"
								className="label justify-start"
							>
								Message<span className="text-error">*</span>
							</label>

							<textarea
								className="textarea textarea-bordered"
								name="message"
								id="message"
								rows="4"
							></textarea>
						</div>
						<button className="btn btn-primary btn-block">
							Send
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default RoomDetailsPage;
