import SongsList from "@/app/components/content/music/SongsList/SongsList";
import "./OutstandingWorks.css";

export default function OutstandingWorks() {
	return (
		<section className="outstanding-works">
			<header>
				<h3>Obras destacadas</h3>

				<ul>
					<li>Music</li>
					<li>Collectibles</li>
					<li>Utiliy</li>
				</ul>
			</header>

			<article>
				<SongsList />
			</article>
		</section>
	);
}
