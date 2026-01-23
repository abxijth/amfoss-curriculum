
import Sidebar from '../../components/Sidebar.jsx'
import "./MusicPlayer.css"
import {
  FaHeart,
  FaShareAlt,
  FaStepBackward,
  FaRegPlayCircle,
  FaStepForward,
  FaRegPauseCircle
} from "react-icons/fa"
import { useParams } from "react-router-dom"
import mockPlaylists from "../../data/mockPlaylists"
import { useEffect, useState, useRef } from "react"

const API_BASE_URL = "https://free-music-api2.vercel.app"

const MusicPlayer = () => {
  const { type, id } = useParams()

  const [songs, setSongs] = useState([])           
  const [currentIndex, setCurrentIndex] = useState(-1) 
  const [data, setData] = useState(null)          
  const [loading, setLoading] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef(null)

  useEffect(() => {
    if (type === "song") {
      fetch(`${API_BASE_URL}/getSongs`)
        .then(res => res.json())
        .then(songsList => {
          const normalized = songsList.map(song => ({
            id: song._id,
            songName: song.songName,
            songBanner: song.songBanner,
            singer: song.singer,
            albumName: song.albumname,
            audioUrl: song.url
          }))

          setSongs(normalized)

          const index = normalized.findIndex(s => s.id === id)
          if (index === -1) {
            setData(null)
            setLoading(false)
            return
          }

          setCurrentIndex(index)
          setData(normalized[index])
          setLoading(false)
        })
        .catch(() => setLoading(false))
    }

    if (type === "playlist") {
      const playlist = mockPlaylists.find(p => String(p.id) === id)
      setData(playlist || null)
      setLoading(false)
    }
  }, [type, id])

  if (loading) return <h2>Loading...</h2>
  if (!data) return <h2>Not found</h2>

  const playPause = () => {
    if (!audioRef.current) return

    if (audioRef.current.paused) {
      audioRef.current.play()
      setIsPlaying(true)
    } else {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  const playNext = () => {
    if (currentIndex === -1 || currentIndex >= songs.length - 1) return

    const nextIndex = currentIndex + 1
    setCurrentIndex(nextIndex)
    setData(songs[nextIndex])
    setIsPlaying(false)
  }

  const playPrev = () => {
    if (currentIndex <= 0) return

    const prevIndex = currentIndex - 1
    setCurrentIndex(prevIndex)
    setData(songs[prevIndex])
    setIsPlaying(false)
  }

  return (
    <div className="music-player-container">
      <Sidebar />

      <div className="music-player-div">
        <img
          width="180"
          src={type === "song" ? data.songBanner : data.playlistBanner}
          alt={type === "song" ? data.songName : data.playlistName}
          className="song-img"
        />

        <h1 className="song-name-player-page">
          {type === "song" ? data.songName : data.playlistName}
        </h1>

        {type === "song" && (
          <audio
            ref={audioRef}
            src={data.audioUrl}
            onEnded={playNext} 
            autoPlay={isPlaying}
          />
        )}

        <div className="like-and-share-btn-div">
          <button className="icon-btn"><FaHeart /></button>
          <button className="icon-btn"><FaShareAlt /></button>
        </div>

        <div className="music-controls">
          <button className="icon-btn" onClick={playPrev}><FaStepBackward /></button>
          <button className="icon-btn" onClick={playPause}>
            {isPlaying ? <FaRegPauseCircle /> : <FaRegPlayCircle />}
          </button>
          <button className="icon-btn" onClick={playNext}><FaStepForward /></button>
        </div>
      </div>
    </div>
  )
}

export default MusicPlayer
