import Banner from "@/app/components/content/banner/Banner/Banner";
import Menu from "@/app/components/menu/Menu/Menu";
import "./page.css";

export default function Home() {
	return (
		<>
			<Menu />
			<main>
				<Banner />
			</main>
		</>
	);
}
