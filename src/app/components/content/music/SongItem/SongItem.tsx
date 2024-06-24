import type Song from "@/app/models/song";
import "./SongItem.css";

interface SongItemPropos {
	song: Song;
}

export default function SongItem({ song }: SongItemPropos) {
	return (
		<div className="song-item">
			<img src={song.cover} alt={song.title} />
			<div className="more-info">
				<h4>{song.title}</h4>
				<div className="author-info">
					<img src={song.profileImg} alt={song.artist} />
					<span>{song.artist}</span>
				</div>
			</div>
		</div>
	);
}
