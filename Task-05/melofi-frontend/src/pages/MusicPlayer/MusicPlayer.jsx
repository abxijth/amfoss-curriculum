import Sidebar from '../../components/Sidebar.jsx'
import "./MusicPlayer.css";
import { FaHeart, FaShareAlt, FaStepBackward, FaRegPlayCircle, FaStepForward} from "react-icons/fa";
import { useParams } from "react-router-dom";
import mockSongs from "../../data/mockSongs";
import mockPlaylists from "../../data/mockPlaylists";



const MusicPlayer = () => {
  

  const { type, id } = useParams();

  let data = null;

  if (type === "song") {
    data = mockSongs.find(s => s.id === Number(id));
  }

  if (type === "playlist") {
    data = mockPlaylists.find(p => p.id === Number(id));
  }

  if (!data) {
    return <h2>Not found</h2>;
  }



  

  

  return (
    <>
      <div className="music-player-container">
        <Sidebar />

        <div className="music-player-div">
          <img
            width="180"
            src={type === "song" ? data.songBanner : data.playlistBanner}
            alt={type === "song" ? data.songName: data.playlistName} 
            className="song-img"
          />

          <h1 className="song-name-player-page">{type === "song" ? data.songName : data.playlistName}</h1>

          <div className="like-and-share-btn-div">
            <button className="icon-btn" aria-label="Like">
              <FaHeart />
            </button>

            <button className="icon-btn" aria-label="Share">
              <FaShareAlt />
            </button>
          </div>

          <div className="music-controls">
            <button className="icon-btn" aria-label="Like">
              <FaStepBackward />
            </button>

            <button className="icon-btn" aria-label="Share">
              <FaRegPlayCircle />
            </button>

            <button className="icon-btn" aria-label="Share">
              <FaStepForward />
            </button>
          </div>


        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
