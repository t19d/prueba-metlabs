import Banner from "@/app/components/content/banner/Banner/Banner";
import Menu from "@/app/components/menu/Menu/Menu";
import OutstandingWorks from "@/app/components/content/music/OutstandingWorks/OutstandingWorks";
import "./page.css";

export default function Home() {
	return (
		<>
			<Menu />
			<main>
				<Banner />
				<OutstandingWorks />
			</main>
		</>
	);
}
