import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "David Tojo - Prueba técnica",
	description: "Prueba técnica realizada por David Tojo para Metlabs",
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
