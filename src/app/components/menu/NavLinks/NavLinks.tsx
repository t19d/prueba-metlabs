import HomeIcon from "@/app/components/icons/HomeIcon";
import LinkMenu from "@/app/components/menu/LinkMenu/LinkMenu";
import UploadButton from "@/app/components/menu/UploadButton/UploadButton";
import "./NavLinks.css";

export default function NavLinks() {
	const links = [
		{ text: "Home", href: "/", icon: <HomeIcon /> },
		{ text: "Descubrir", href: "#" },
		{ text: "Favoritos", href: "#" },
	];

	return (
		<nav className="navlinks">
			<ul>
				{links.map((link, i) => (
					<li key={i}>
						<LinkMenu {...link} />
					</li>
				))}
			</ul>

			<UploadButton />

			<div className="dropdown">
				<img src="/img/profile.png" alt="perfil" />
			</div>
		</nav>
	);
}
