import type Song from "@/app/models/song";
import HandshakeIcon from "@/app/components/icons/HandshakeIcon";
import CartIcon from "@/app/components/icons/CartIcon";
import HeartIcon from "@/app/components/icons/HeartIcon";
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
			<ul className="actions">
				<li>
					<a href="#" className="btn-icon">
						<HandshakeIcon />
					</a>
				</li>
				<li>
					<a href="#" className="btn-icon">
						<CartIcon />
					</a>
				</li>
				<li>
					<a href="#" className="btn-icon">
						<HeartIcon />
					</a>
				</li>
			</ul>
		</div>
	);
}
