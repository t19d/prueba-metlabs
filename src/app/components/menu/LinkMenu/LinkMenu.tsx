"use client";
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
	const isCurrentPage = window.location.pathname === href;
	let className = "link";
	if (isCurrentPage) className += " current-page";

	return (
		<a href={href ?? "#"} className={className}>
			{icon && isCurrentPage && icon}
			<span>{text}</span>
		</a>
	);
}
