import { Roboto } from "next/font/google";
import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Toaster } from "react-hot-toast";
import ClientWrapper from "./(public)/components/client-wrapper";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"],
	variable: "--font-roboto",
});

export const metadata = {
	title: {
		default: "Find a new home", // a default is required when creating a template
		template: "%s | Benchmark realty management",
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.variable}`}>
				<ClientWrapper>{children}</ClientWrapper>
				<Toaster />
			</body>
		</html>
	);
}
