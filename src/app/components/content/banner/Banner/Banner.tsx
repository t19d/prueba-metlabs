import "./Banner.css";

export default function Banner() {
	return (
		<section className="banner">
			<article className="content">
				<h2>Membresía premium</h2>
				<div className="buttons">
					<a href="#" className="btn">
						Suscribirse
					</a>
					<a href="#" className="btn btn-outline">
						Descubrir planes
					</a>
				</div>
			</article>

			<article className="image">
				<img src="/img/listening_music.png" alt="Banner" />
			</article>
		</section>
	);
}
