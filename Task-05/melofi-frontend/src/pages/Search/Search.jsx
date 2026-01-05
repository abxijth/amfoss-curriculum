import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import PlaylistCard from '../../components/PlaylistCard.jsx'
import Button from '../../components/Button.jsx'
import "./Search.css"
import mockSongs from '../../data/mockSongs';
import { Link } from "react-router-dom";

const Search = () => {
	return(
		<>
			<div className="wrapper-search">
				<Sidebar/>
				<div className="search-bar">
					<input type="text" placeholder="Search.." />					
				</div>

				<div className="search-content">
					{
							mockSongs.map((song) => (<Link to={`/musicplayer/song/${song.id}`} key={song.id}><MusicCard songBanner={song.songBanner} songName={song.songName} albumName={song.albumName} singer={song.singer}/></Link>))
					}
					



				</div>
			</div>
		</>





		);
}

export default Search