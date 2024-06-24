import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "David Tojo - Prueba técnica",
	description: "Prueba técnica realizada por David Tojo para Metlabs.",
	openGraph: {
		type: "website",
		locale: "es_ES",
		url: "https://prueba-metlabs.vercel.app/",
		title: "David Tojo - Prueba técnica",
		description: "Prueba técnica realizada por David Tojo para Metlabs.",
		images: [
			{
				url: "https://prueba-metlabs.vercel.app/img/og.png",
				width: 1200,
				height: 630,
				alt: "Prueba técnica",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
