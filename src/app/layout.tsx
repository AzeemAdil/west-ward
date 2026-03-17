


import '@/styles/globals.scss';
import ConfigWrapper from "@/common/configWrapper";
import { Metadata } from "next/types";
import { ASSETS } from '@/helpers/assets';
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});



const baseURL = "https://test.com";
const pageUrl = `${baseURL}/`;
const pageImage = `${baseURL}${ASSETS.Image}`;
const title = `Title`;
const description = "description";

export const metadata: Metadata = {
	title: title,
	description: description,
	openGraph: {
		title: title,
		description: description,
		url: pageUrl,
		siteName: pageUrl,
		images: [
			{
				url: pageImage,
				secureUrl: pageImage,
				alt: "Logo",
			},
		],
	},
	twitter: {
		title: title,
		description: description,
		card: "summary_large_image",
		images: [
			{
				url: pageImage,
				secureUrl: pageImage,
				alt: "Logo",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={roboto.className} >
				<ConfigWrapper>
					{children}
				</ConfigWrapper>
			</body>
		</html>
	);
}