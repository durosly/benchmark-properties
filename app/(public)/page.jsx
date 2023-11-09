import frontApartment from "@/public/images/front-apartment.png";
import kitchen from "@/public/images/kitchen.jpg";
import livingArea from "@/public/images/living-area.png";
import studyArea from "@/public/images/study-area.png";
import Image from "next/image";
import Link from "next/link";
import { FiMap, FiUnlock, FiWifi } from "react-icons/fi";
import SearchApartmentForm from "./components/search-apartment-form";
import FadeAnimation from "./components/fade-animation";
import Counts from "./__components/counts";

export const metadata = { title: "Find a new home" };

function Home() {
	return (
		<>
			<div className="min-h-[450px] pt-28 px-5 text-center md:text-left md:px-20 pb-10 md:pb-0 housing bg-fixed bg-cover bg-center rounded-2xl mt-10 mb-20">
				<h2 className="text-6xl text-white font-bold font-roboto max-w-xl [font-size:clamp(2rem,8vw,3.75rem)]">
					It&apos;s time to find a smart home
				</h2>
				<p className="text-white text-xl mt-10 mb-10 md:mb-10">
					We are a new kind of student living experience, designed
					with you in mind.
				</p>

				<Link
					href="/rooms"
					className="btn btn-primary md:hidden"
				>
					Find a home
				</Link>

				<div className="mt-10 relative max-w-3xl hidden md:block">
					<div className="bg-white max-w-[50%] py-5 px-10 rounded-t-xl relative">
						<p className="text-xl font-bold text-primary">
							Find exactly what you need
						</p>
						<div
							style={{
								"--size": "15px",
								"--c1": "transparent",
								"--c2": "#fff",
							}}
							className="corner absolute bottom-0 -right-[var(--size)] -rotate-90"
						></div>
					</div>
					<SearchApartmentForm />
					<div
						style={{
							"--size": "15px",
							"--c1": "transparent",
							"--c2": "#fff",
						}}
						className="corner absolute bottom-0 -left-[var(--size)] -rotate-180"
					></div>
					<div
						style={{
							"--size": "15px",
							"--c1": "transparent",
							"--c2": "#fff",
						}}
						className="corner absolute bottom-0 -right-[var(--size)] -rotate-90"
					></div>
				</div>
			</div>

			<FadeAnimation
				down
				cascade
				duration={1000}
			>
				<div className="flex justify-center flex-wrap gap-5 mb-20">
					<div className="flex-[300px] flex-grow-0">
						<FiMap className="w-8 h-8 mx-auto stroke-primary" />
						<div className="text-center">
							<h3 className="text-xl font-bold my-2	">
								Transportation
							</h3>
							<p className="text-sm">
								<span className="font-bold">
									Quick, safe and reliable.
								</span>{" "}
								<span>
									We provide transportation for students
									moving from thier apartments to school
								</span>
							</p>
						</div>
					</div>
					<div className="flex-[300px] flex-grow-0">
						<FiWifi className="w-8 h-8 mx-auto stroke-primary" />
						<div className="text-center">
							<h3 className="text-xl font-bold my-2	">
								Unlimited Internet
							</h3>
							<p className="text-sm">
								<span className="font-bold">
									High speed over 10mb/s.
								</span>{" "}
								<span>
									Internet is an essential tool to being a
									student and we are no stranger to that
								</span>
							</p>
						</div>
					</div>
					<div className="flex-[300px] flex-grow-0">
						<FiUnlock className="w-8 h-8 mx-auto stroke-primary" />
						<div className="text-center">
							<h3 className="text-xl font-bold my-2	">Security</h3>
							<p className="text-sm">
								<span className="font-bold">
									24/7 CCTV and security.
								</span>{" "}
								<span>
									Safety of lives and properties is our
									priority. We ensure to keep a tight belt on
									this
								</span>
							</p>
						</div>
					</div>
				</div>
			</FadeAnimation>

			<div className="md:flex gap-10 mb-20">
				<FadeAnimation left>
					<div className="relative w-full md:w-96 h-52 md:h-auto aspect-square rounded-2xl overflow-hidden">
						<Image
							src={frontApartment}
							alt=""
							fill
							className="object-cover"
						/>
					</div>
				</FadeAnimation>
				<div className="flex-1 space-y-4 mt-5 md:mt-0">
					<FadeAnimation
						right
						delay={200}
					>
						<h2 className="text-3xl font-semibold text-left">
							Benchmark Studentpad
						</h2>
					</FadeAnimation>
					<FadeAnimation
						right
						delay={500}
					>
						<p>
							We&apos;ve set out to redefine the student living
							experience. We believe that every student deserves a
							comfortable, safe, and inspiring place to call home
							while pursuing their educational dreams.
						</p>
					</FadeAnimation>
					<FadeAnimation delay={600}>
						<p>What Sets Us Apart:</p>
					</FadeAnimation>
					<FadeAnimation
						cascade
						delay={800}
						top
						duration={1000}
					>
						<ul className="pl-5 space-y-3">
							<li>
								<div className="flex gap-2 items-center">
									<div className="inline-block w-2 h-2 rounded-full bg-primary"></div>
									<h4 className="font-bold">
										Tailored for Students
									</h4>
								</div>
								<p className="pl-4">
									We&apos;ve designed our accommodations
									specifically for the needs of students. From
									well-appointed private rooms to spacious
									common areas, we provide a variety of
									options to suit your preferences and budget.
								</p>
							</li>
							<li>
								<div className="flex gap-2 items-center">
									<div className="inline-block w-2 h-2 rounded-full bg-primary"></div>
									<h4 className="font-bold">
										Safety and Security
									</h4>
								</div>
								<p className="pl-4">
									Your peace of mind is our top priority. Our
									properties are equipped with
									state-of-the-art security measures,
									including secure entry systems and 24/7
									surveillance, ensuring that you feel safe at
									all times.
								</p>
							</li>
							<li>
								<div className="flex gap-2 items-center">
									<div className="inline-block w-2 h-2 rounded-full bg-primary"></div>
									<h4 className="font-bold">
										Convenient Locations
									</h4>
								</div>
								<p className="pl-4">
									Our properties are strategically located
									near major universities and colleges, making
									it easy to get to your classes, libraries,
									and extracurricular activities. We
									understand the value of a convenient
									location in your academic journey.
								</p>
							</li>
						</ul>
					</FadeAnimation>
				</div>
			</div>

			<Counts />

			<div className="md:flex md:gap-5 md:h-80 mb-20 space-y-5 md:space-y-0 ">
				<FadeAnimation top>
					<div className="flex-1 flex flex-col justify-center md:p-5">
						<h2 className="text-xl font-bold mb-5">
							Explore some of the best facilities
						</h2>
						<p>
							We invite you to explore our exceptional properties
							and see for yourself how we&apos;re redefining the
							way students live during their university years.
						</p>
					</div>
				</FadeAnimation>
				<FadeAnimation right>
					<div className="flex-1 h-80 md:h-auto bg-primary relative rounded-2xl overflow-hidden">
						<Image
							src={studyArea}
							alt=""
							fill
							className="object-cover"
						/>
						<div className="overlay bg-gradient-to-t from-black absolute top-0 left-0 h-full w-full flex items-end">
							<div className="px-5 py-2 text-white">
								<h3 className="font-bold text-xl mb-3">
									Study area
								</h3>
								<p>
									Enjoy the comfort of the cozy chairs and the
									support of helpful assistants.
								</p>
							</div>
						</div>
					</div>
				</FadeAnimation>
				<FadeAnimation
					right
					delay={500}
				>
					<div className="flex-1 h-80 md:h-auto bg-primary relative rounded-2xl overflow-hidden">
						<Image
							src={livingArea}
							alt=""
							fill
							className="object-cover"
						/>
						<div className="overlay bg-gradient-to-t from-black absolute top-0 left-0 h-full w-full flex items-end">
							<div className="px-5 py-2 text-white">
								<h3 className="font-bold text-xl mb-3">
									Living area
								</h3>
								<p>
									This vibrant space is designed for
									relaxation and unwinding after a long day at
									school.
								</p>
							</div>
						</div>
					</div>
				</FadeAnimation>
				<FadeAnimation
					right
					delay={1000}
				>
					<div className="flex-1 h-80 md:h-auto bg-primary relative rounded-2xl overflow-hidden">
						<Image
							src={kitchen}
							alt=""
							fill
							className="object-cover"
						/>
						<div className="overlay bg-gradient-to-t from-black absolute top-0 left-0 h-full w-full flex items-end">
							<div className="px-5 py-2 text-white">
								<h3 className="font-bold text-xl mb-3">
									Kitchen
								</h3>
								<p>
									Step into our well-equipped kitchen, where
									culinary creativity knows no bounds.
								</p>
							</div>
						</div>
					</div>
				</FadeAnimation>
			</div>
			<FadeAnimation bottom>
				<div className="bg-primary p-10 rounded-xl text-center mb-20 relative">
					<FadeAnimation
						top
						delay={500}
					>
						<p className="text-4xl font-bold mb-5">
							Find Your Dream Room Using Our Interactive Catalog
						</p>
					</FadeAnimation>
					<FadeAnimation
						bottom
						delay={1000}
					>
						<Link
							href="/rooms"
							className="btn btn-wide"
						>
							Check all houses
						</Link>
					</FadeAnimation>
					<FadeAnimation
						left
						delay={1500}
					>
						<span className="absolute inline-block bottom-10 left-5 md:left-24">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="59.1162"
								height="45.35772"
								viewBox="0 0 59.1162 45.35772"
								creator="Katerina Limpitsouni"
							>
								<path
									d="M41.69158,14.65737c3.02152-4.51246,6.04304-9.02491,9.06455-13.53737h-1.29521c2.40533,3.96877,4.81066,7.93755,7.216,11.90632,.34353,.56682,.68706,1.13365,1.03059,1.70047,.49968,.82446,1.79734,.07144,1.29521-.75708-2.40533-3.96877-4.81066-7.93755-7.216-11.90632-.34353-.56682-.68706-1.13365-1.03059-1.70047-.3042-.50192-.98348-.46555-1.29521,0-3.02152,4.51246-6.04304,9.02491-9.06455,13.53737-.53858,.80434,.76019,1.55609,1.29521,.75708h0Z"
									fill="#01010C"
									origin="undraw"
								/>
								<path
									d="M.71568,45.06023c9.37198-1.04012,18.03249-6.72685,22.51593-15.06658,2.28371-4.24797,3.7883-9.90346,1.05639-14.31396-2.29329-3.70239-7.18429-5.68536-10.98375-2.94419-3.95978,2.85684-4.40562,8.09368-3.36503,12.48745,.63378,2.67602,1.65266,5.29118,2.6765,7.83978,.87047,2.16683,1.84546,4.3184,3.17656,6.24615,2.6185,3.79221,6.56207,6.27436,11.28073,6.03263,4.95423-.25379,9.33462-3.00957,12.42751-6.77246,3.77097-4.58787,6.06946-10.3746,7.90237-15.96445,2.07519-6.32874,3.32934-12.90027,3.82732-19.53899,.07223-.96288-1.42812-.95825-1.5,0-.74496,9.93139-3.20394,20.04629-7.77523,28.93617-2.07757,4.04029-4.87685,7.93778-8.96377,10.12785-3.86989,2.07377-8.72806,2.49879-12.47997-.0623-3.46799-2.36728-5.32423-6.47642-6.78884-10.26631-1.63486-4.23046-3.81938-9.23633-2.34844-13.80326,.63763-1.9797,2.00611-3.92282,3.99719-4.71236,2.07019-.82091,4.32818-.15697,5.97527,1.24272,3.89475,3.30976,3.27051,8.88073,1.38336,13.10231-3.88123,8.6824-12.59401,14.88436-22.01409,15.92982-.94888,.10531-.95959,1.6065,0,1.5H.71568Z"
									fill="#01010C"
								/>
							</svg>
						</span>
					</FadeAnimation>
				</div>
			</FadeAnimation>
		</>
	);
}

export default Home;
