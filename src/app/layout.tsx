import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Everistus Akpabio",
	description: "A full-stack developer with a passion for building scalable and maintainable software.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="dark">
			<body>{children}</body>
		</html>
	);
}
