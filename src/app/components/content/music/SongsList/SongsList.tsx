import type Song from "@/app/models/song";
import SongItem from "@/app/components/content/music/SongItem/SongItem";
import "./SongsList.css";

export default function SongsList() {
	const songs: Song[] = [
		{
			title: "Jaime Cantante",
			artist: "@johnti60",
			profileImg: "/img/profile.png",
			cover: "/img/cover.png",
		},
		{
			title: "Jaime Cantante",
			artist: "@johnti60",
			profileImg: "/img/profile.png",
			cover: "/img/cover.png",
		},
		{
			title: "Jaime Cantante",
			artist: "@johnti60",
			profileImg: "/img/profile.png",
			cover: "/img/cover.png",
		},
		{
			title: "Jaime Cantante",
			artist: "@johnti60",
			profileImg: "/img/profile.png",
			cover: "/img/cover.png",
		},
		{
			title: "Jaime Cantante",
			artist: "@johnti60",
			profileImg: "/img/profile.png",
			cover: "/img/cover.png",
		},
	];

	return (
		<ul className="songs">
			{songs.map((song, i) => (
				<li key={i}>
					<SongItem song={song} />
				</li>
			))}
		</ul>
	);
}
