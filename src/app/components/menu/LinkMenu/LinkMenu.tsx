"use client";
import { usePathname } from "next/navigation";
import "./LinkMenu.css";

interface LinkMenuProps {
	// Texto del botón
	text: string;
	// Dirección de la página
	href?: string;
	// Componente icono del botón
	icon?: JSX.Element;
}

export default function LinkMenu({ text, href, icon }: LinkMenuProps) {
	let className = "link";
	const pathname = usePathname();
	let isCurrentPage = pathname === href;
	if (isCurrentPage) className += " current-page";

	return (
		<a href={href ?? "#"} className={className}>
			{icon && isCurrentPage && icon}
			<span>{text}</span>
		</a>
	);
}
