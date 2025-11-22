import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import PlaylistCard from '../../components/PlaylistCard.jsx'
import './Dashboard.css'
import Button from '../../components/Button.jsx'

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
						<MusicCard songBanner = "https://picsum.photos/200"  songName = "Song Name"  albumName = "Album Name" singer = "Singer" />
		        		<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
		        		<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
		        		<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
		        		<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
		        		<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
		        		<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
						<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
						<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />
						<MusicCard songBanner = "https://picsum.photos/200"  songName = "Hello"  albumName = "albumname" singer = "singer" />        		
					</div>
				</div>


				<div className="songs-section">
					<div className="songs-title-btn-div">
						<Button text="Playlist" type="submit" className="songs-title-btn"/>
					</div>
					<div className="music-cards-div">
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
						<PlaylistCard playlistBanner = "https://picsum.photos/200"  playlistName = "Hello"  playlistCreator = "albumname"/>
					</div>
				</div>
			</div>
		</>


		)
}

export default Dashboard