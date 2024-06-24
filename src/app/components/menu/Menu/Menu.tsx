import Logo from "../Logo/Logo";
import NavLinks from "../NavLinks/NavLinks";
import SearchBar from "../SearchBar/SearchBar";
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
