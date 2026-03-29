


import '@/styles/globals.scss';
import ConfigWrapper from "@/common/configWrapper";
import { Metadata } from "next/types";
import { ASSETS } from '@/helpers/assets';
import localFont from "next/font/local";



const charter = localFont({
  src: [
    {
      path: '../fonts/charter/Charter Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/charter/Charter Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/charter/Charter Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-charter',
})

const urwDin = localFont({
  src: '../fonts/urw-din/urw-din-regular.woff2',
  variable: '--font-urw-din',
})

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
			<body className={`${charter.variable} ${urwDin.className} antialiased overflow-x-hidden`} suppressHydrationWarning>
				<ConfigWrapper>
					{children}
				</ConfigWrapper>
			</body>
		</html>
	);
}