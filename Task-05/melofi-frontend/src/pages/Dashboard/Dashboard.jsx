import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import PlaylistCard from '../../components/PlaylistCard.jsx'
import './Dashboard.css'
import Button from '../../components/Button.jsx'
import mockSongs from '../../data/mockSongs';
import mockPlaylists from '../../data/mockPlaylists';


const Dashboard = () => {

	return (
		<>
			<div className="wrapper-dashboard">
				<Sidebar/>

				<div className="songs-section">
					<div className="songs-title-btn-div">
						<Button text="Songs" type="submit" className="songs-title-btn"/>
					</div>
					<div className="music-cards-div">
						{
							mockSongs.map((song) => (<MusicCard key={song.id} songBanner={song.songBanner} songName={song.songName} albumName={song.albumName} singer={song.singer}/>))
						}
					</div>
				</div>


				<div className="songs-section">
					<div className="songs-title-btn-div">
						<Button text="Playlist" type="submit" className="songs-title-btn"/>
					</div>
					<div className="music-cards-div">
						{
							mockPlaylists.map((playlist) => (<PlaylistCard key={playlist.id} playlistBanner={playlist.playlistBanner} playlistName={playlist.playlistName} playlistCreator={playlist.playlistCreator}/>))
						}
					</div>
				</div>
			</div>
		</>


		)
}

export default Dashboard