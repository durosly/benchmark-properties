import Image from "next/image";
import Link from "next/link";
import logo from "@/logos/logo-main.png";
import logoWithText from "@/logos/logo-main-with-text.png";
import NavLink from "./components/nav-links";

export default function PublicLayout({ children }) {
	return (
		<div className="drawer">
			<input
				id="my-drawer-3"
				type="checkbox"
				className="drawer-toggle"
			/>
			<div className="drawer-content block">
				{/* Navbar */}
				<div className="max-w-7xl mx-auto">
					<div className="w-full navbar mt-3 ">
						<div className="navbar-start">
							<div className="flex-none lg:hidden">
								<label
									htmlFor="my-drawer-3"
									aria-label="open sidebar"
									className="btn btn-square btn-ghost"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block w-6 h-6 stroke-current"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										></path>
									</svg>
								</label>
							</div>
							<div className="flex-none px-2 mx-2 relative w-32 h-16">
								<Image
									src={logo}
									alt="benchmark realestate"
									className="object-contain"
									fill
									priority={true}
									placeholder="blur"
								/>
							</div>
						</div>
						<div className="navbar-center">
							<div className="flex-none hidden lg:block">
								<ul className="menu menu-horizontal">
									{/* Navbar menu content here */}
									<li>
										<NavLink path="/">Home</NavLink>
									</li>
									<li>
										<NavLink path="/about-us">
											About Us
										</NavLink>
									</li>
									<li>
										<NavLink path="/rooms">Rooms</NavLink>
									</li>
									<li>
										<NavLink path="/locations">
											Locations
										</NavLink>
									</li>
									<li>
										<NavLink path="/services">
											Services
										</NavLink>
									</li>
								</ul>
							</div>
						</div>
						<div className="navbar-end">
							<a className="btn btn-primary">Find Apartment</a>
						</div>
					</div>
					{/* Page content here */}
					<main className="px-5 sm:px-10 ">{children}</main>
				</div>
				<footer className="footer p-10 bg-black/10 ">
					<aside>
						<div className="relative h-[180px] aspect-square">
							<Image
								src={logoWithText}
								fill
								placeholder="blur"
								className="object-contain"
							/>
						</div>
						<p>
							Benchmark Ltd.
							<br />
							Realty Management since 2008
						</p>
					</aside>
					{/* <nav>
						<header className="footer-title">Services</header>
						<a className="link link-hover">Design</a>
						<a className="link link-hover">Marketing</a>
						<a className="link link-hover">Advertisement</a>
					</nav> */}
					<nav>
						<header className="footer-title">Company</header>
						<Link href="/about-us">About Us</Link>
						<Link href="/contact">Contact</Link>
						<a className="link link-hover">Locations</a>
						<a className="link link-hover">Rooms</a>
					</nav>
					<nav>
						<header className="footer-title">Legal</header>
						<a className="link link-hover">
							Terms &amp; conditions
						</a>
						<a className="link link-hover">Policies</a>
						{/* <a className="link link-hover">Cookie policy</a> */}
					</nav>
					<nav>
						<header className="footer-title">Social Media</header>
					</nav>
				</footer>
				<footer className="footer footer-center p-4 bg-black/20">
					<aside>
						<p>
							Copyright © 2023 - All right reserved by Benchmark
							studentpad Ltd
						</p>
					</aside>
				</footer>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-3"
					aria-label="close sidebar"
					className="drawer-overlay"
				></label>
				<ul className="menu p-4 w-80 min-h-full bg-base-200">
					{/* Sidebar content here */}
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
