import SongsList from "@/app/components/content/music/SongsList/SongsList";
import "./OutstandingWorks.css";

export default function OutstandingWorks() {
	return (
		<section className="outstanding-works">
			<header>
				<h3>Obras destacadas</h3>

				<ul>
					<li>
						<a href="#" className="link">
							Music
						</a>
					</li>
					<li>
						<a href="#" className="link">
							Collectibles
						</a>
					</li>
					<li>
						<a href="#" className="link">
							Utility
						</a>
					</li>
				</ul>
			</header>

			<article>
				<SongsList />
			</article>
		</section>
	);
}
