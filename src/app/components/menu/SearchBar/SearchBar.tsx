import SearchIcon from "@/app/components/icons/SearchIcon";
import "./SearchBar.css";

export default function SearchBar() {
	return (
		<div className="searcher">
			<label htmlFor="searcher" aria-label="search">
				<SearchIcon />
			</label>
			<input id="searcher" type="search" placeholder="Search Item, Collection and Account..." />
		</div>
	);
}
