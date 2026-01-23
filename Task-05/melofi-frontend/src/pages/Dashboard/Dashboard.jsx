import Sidebar from '../../components/Sidebar.jsx'
import MusicCard from '../../components/MusicCard.jsx'
import PlaylistCard from '../../components/PlaylistCard.jsx'
import './Dashboard.css'
import Button from '../../components/Button.jsx'
import mockPlaylists from '../../data/mockPlaylists';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const API_BASE_URL = "https://free-music-api2.vercel.app"


const Dashboard = () => {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE_URL}/getSongs`)
      .then(res => res.json())
      .then(data => {
        const normalized = data.map(song => ({
          id: song._id,
          songName: song.songName,
          songBanner: song.songBanner,
          singer: song.singer,
          albumName: song.albumname,
          audioUrl: song.url
        }));
        setSongs(normalized);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
