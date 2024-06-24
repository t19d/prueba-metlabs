import Logo from "@/app/components/menu/Logo/Logo";
import NavLinks from "@/app/components/menu/NavLinks/NavLinks";
import SearchBar from "@/app/components/menu/SearchBar/SearchBar";
import "./Menu.css";

export default function Menu() {
	return (
		<header className="menu">
			<Logo />
			<SearchBar />
			<NavLinks />
		</header>
	);
}
