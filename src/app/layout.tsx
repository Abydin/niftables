import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const Satoshi = localFont({
	variable: "--font-satoshi",
	src: [
		{
			path: "./fonts/Satoshi-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "./fonts/Satoshi-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
});
const MonumentExtended = localFont({
	variable: "--font-monument",
	display: "swap",
	src: "./fonts/MonumentExtended-Regular.woff2",
});

export const metadata: Metadata = {
	title: "Niftables",
	description: "Front-End Development Technical Test: Figma Design Integration",
	authors: {
		name: "Abideen Ayinde",
		url: "https://abydin.com",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`${Satoshi.variable} ${MonumentExtended.variable}`}
			lang="en"
		>
			<body>{children}</body>
		</html>
	);
}
