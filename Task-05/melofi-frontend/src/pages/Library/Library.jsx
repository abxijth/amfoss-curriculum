import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import PlaylistCard from '../../components/PlaylistCard.jsx'
import Button from '../../components/Button.jsx'
import './Library.css'
import { useState } from "react";
import mockPlaylists from "../../data/mockPlaylists";
import mockLikedSongs from "../../data/mockLikedSongs";
import { Link } from "react-router-dom";






const Library = () => {
	const [activeTab, setActiveTab] = useState("playlist");

	return (
		<>
			<div className="wrapper-library">
				<Sidebar/>
				<div className="top-section-library">
					<Button text="Playlist" type="button" className={`playlist-btn-library ${activeTab === "playlist" ? "active-btn" : ""}`} onClick={() => setActiveTab("playlist")}/>
					<Button text="Liked" type="button" className={`liked-btn-library ${activeTab === "liked" ? "active-btn" : ""}`} onClick={() => setActiveTab("liked")}/>				
				</div>

				<div className="library-content">
				  {activeTab === "playlist" && (
				    <div className="cards-grid">
				    	{mockPlaylists.map((playlist) => (
					      <Link to={`/musicplayer/playlist/${playlist.id}`} key={playlist.id}><PlaylistCard
					        playlistBanner={playlist.playlistBanner}
					        playlistName={playlist.playlistName}
					        playlistCreator={playlist.playlistCreator}
					      /></Link>
					    ))}
				    </div>
				  )}

				  {activeTab === "liked" && (
				    <div className="cards-grid">
				    	{mockLikedSongs.map((song) => (
					      <Link to={`/musicplayer/song/${song.id}`} key={song.id}><MusicCard
					        songBanner={song.songBanner}
					        songName={song.songName}
					        albumName={song.albumName}
					        singer={song.singer}
					      /></Link>
					    ))}
				    </div>
				  )}
				</div>



			</div>
		</>



		);






}

export default Library