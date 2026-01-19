import { useEffect} from "react";
import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import PlaylistCard from '../../components/PlaylistCard.jsx'
import './Dashboard.css'
import Button from '../../components/Button.jsx'
import mockPlaylists from '../../data/mockPlaylists';
import mockSongs from '../../data/mockSongs';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    fetch("http://127.0.0.1:5000/api/dashboard", {method: "GET", headers: {Authorization: `Bearer ${token}`}})
    .then(res => {
      if(!res.ok) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      return res.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(() => {
      navigate("/login");
    });
  }, [navigate]);


  const songs = mockSongs;
  


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
							songs.map((song) => (<Link to={`/musicplayer/song/${song.id}`} key={song.id}><MusicCard songBanner={song.songBanner} songName={song.songName} albumName={song.albumName} singer={song.singer}/></Link>))
						}
					</div>
				</div>


				<div className="songs-section">
					<div className="songs-title-btn-div">
						<Button text="Playlist" type="submit" className="songs-title-btn"/>
					</div>
					<div className="playlist-cards-div">
						{
							mockPlaylists.map((playlist) => (<Link to={`/musicplayer/playlist/${playlist.id}`} key={playlist.id}><PlaylistCard playlistBanner={playlist.playlistBanner} playlistName={playlist.playlistName} playlistCreator={playlist.playlistCreator}/></Link>))
						}
					</div>
				</div>
			</div>
		</>


		)
}

export default Dashboard
